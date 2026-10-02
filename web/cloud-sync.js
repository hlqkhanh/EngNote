(function () {
  "use strict";

  const LOCAL_UPDATED_KEY = "part5-cloud-local-updated-at";
  const LAST_SYNC_KEY = "part5-cloud-last-synced-at";
  const TABLE = "toeic_sync";
  const config = window.part5SupabaseConfig || {};
  const configured = /^https:\/\/.+\.supabase\.co\/?$/i.test(config.url || "")
    && /^(sb_publishable_|eyJ)/.test(config.publishableKey || "");
  let bindings = null;
  let timer = null;
  let applyingRemote = false;
  let syncPromise = null;
  let currentStatus = configured
    ? { state: "idle", label: "Sẵn sàng đồng bộ", detail: "Đang chờ kết nối Supabase." }
    : { state: "local", label: "Đang lưu trên thiết bị", detail: "Chưa điền Supabase URL và publishable key." };

  const validDate = value => Number.isFinite(new Date(value).getTime());
  const isoNow = () => new Date().toISOString();
  const getLocalModifiedAt = () => {
    const value = localStorage.getItem(LOCAL_UPDATED_KEY);
    return validDate(value) ? value : new Date(0).toISOString();
  };
  const setLocalModifiedAt = value => localStorage.setItem(LOCAL_UPDATED_KEY, value);

  function setStatus(state, label, detail) {
    currentStatus = { state, label, detail };
    bindings?.onStatus?.(currentStatus);
  }

  function endpoint(query = "") {
    return `${config.url.replace(/\/$/, "")}/rest/v1/${TABLE}${query}`;
  }

  function headers(extra = {}) {
    return { apikey: config.publishableKey, ...extra };
  }

  async function readRemote() {
    const response = await fetch(endpoint(`?id=eq.${encodeURIComponent(config.recordId || "primary")}&select=payload,updated_at&limit=1`), {
      headers: headers({ Accept: "application/json" }),
      cache: "no-store"
    });
    if (!response.ok) throw new Error(`Supabase GET ${response.status}`);
    const rows = await response.json();
    return rows[0] || null;
  }

  async function writeRemote(snapshot) {
    const updatedAt = isoNow();
    const payload = { ...snapshot, modifiedAt: getLocalModifiedAt() };
    const response = await fetch(endpoint("?on_conflict=id"), {
      method: "POST",
      headers: headers({
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal"
      }),
      body: JSON.stringify([{ id: config.recordId || "primary", payload, updated_at: updatedAt }])
    });
    if (!response.ok) throw new Error(`Supabase UPSERT ${response.status}`);
    localStorage.setItem(LAST_SYNC_KEY, updatedAt);
    setStatus("synced", "Đã đồng bộ", `Cập nhật lúc ${new Intl.DateTimeFormat("vi-VN", { timeStyle: "short" }).format(new Date(updatedAt))}.`);
  }

  async function synchronize({ forcePush = false } = {}) {
    if (!configured || !bindings) return false;
    if (syncPromise) return syncPromise;
    syncPromise = (async () => {
      setStatus("syncing", "Đang đồng bộ…", "Đang so sánh dữ liệu trên thiết bị với Supabase.");
      try {
        const remote = await readRemote();
        const localModifiedAt = getLocalModifiedAt();
        if (!remote) {
          if (!validDate(localModifiedAt) || localModifiedAt === new Date(0).toISOString()) setLocalModifiedAt(isoNow());
          await writeRemote(bindings.getSnapshot());
          return true;
        }
        const remoteSnapshot = remote.payload;
        const remoteModifiedAt = validDate(remoteSnapshot?.modifiedAt) ? remoteSnapshot.modifiedAt : remote.updated_at;
        if (!forcePush && new Date(remoteModifiedAt) > new Date(localModifiedAt)) {
          applyingRemote = true;
          await bindings.applySnapshot(remoteSnapshot);
          setLocalModifiedAt(remoteModifiedAt);
          localStorage.setItem(LAST_SYNC_KEY, remote.updated_at);
          setStatus("synced", "Đã nhận dữ liệu mới", "Tiến trình từ thiết bị khác đã được khôi phục.");
          return true;
        }
        if (forcePush || new Date(localModifiedAt) > new Date(remoteModifiedAt)) {
          await writeRemote(bindings.getSnapshot());
          return true;
        }
        localStorage.setItem(LAST_SYNC_KEY, remote.updated_at);
        setStatus("synced", "Đã đồng bộ", "Dữ liệu trên thiết bị và Supabase đã giống nhau.");
        return true;
      } catch (error) {
        setStatus("error", "Chưa thể đồng bộ", `${error.message}. Dữ liệu vẫn được lưu trên thiết bị.`);
        return false;
      } finally {
        applyingRemote = false;
        syncPromise = null;
      }
    })();
    return syncPromise;
  }

  function notifyChange() {
    if (applyingRemote) return;
    setLocalModifiedAt(isoNow());
    if (!configured || !bindings) return;
    setStatus("pending", "Đang chờ đồng bộ", "Thay đổi đã lưu trên thiết bị và sẽ được gửi lên Supabase.");
    clearTimeout(timer);
    timer = setTimeout(() => synchronize({ forcePush: true }), 900);
  }

  async function init(nextBindings) {
    bindings = nextBindings;
    bindings.onStatus?.(currentStatus);
    if (!configured) return false;
    window.addEventListener("online", () => synchronize());
    return synchronize();
  }

  window.part5NotifyChange = notifyChange;
  window.part5CloudSync = {
    configured,
    init,
    syncNow: () => synchronize(),
    getStatus: () => ({ ...currentStatus }),
    getLocalModifiedAt
  };
})();
