const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const storage = {};
let remoteRow = {
  payload: { schemaVersion: 1, exportedAt: "2020-01-02T00:00:00.000Z", modifiedAt: "2020-01-02T00:00:00.000Z", marker: "remote" },
  updated_at: "2020-01-02T00:00:00.000Z"
};
const requests = [];
const context = {
  console, Date, JSON, Intl, encodeURIComponent, setTimeout, clearTimeout,
  localStorage: {
    getItem: key => storage[key] ?? null,
    setItem: (key, value) => { storage[key] = String(value); }
  },
  fetch: async (url, options = {}) => {
    requests.push({ url, options });
    if (!options.method) return { ok: true, status: 200, json: async () => remoteRow ? [remoteRow] : [] };
    const [saved] = JSON.parse(options.body);
    remoteRow = { payload: saved.payload, updated_at: saved.updated_at };
    return { ok: true, status: 201, json: async () => ({}) };
  }
};
context.window = context;
context.window.addEventListener = () => {};
context.window.part5SupabaseConfig = {
  url: "https://example.supabase.co",
  publishableKey: "sb_publishable_test",
  recordId: "primary"
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.resolve(__dirname, "..", "cloud-sync.js"), "utf8"), context, { filename: "cloud-sync.js" });

(async () => {
  let localSnapshot = { schemaVersion: 1, exportedAt: "2020-01-01T00:00:00.000Z", marker: "local" };
  let applied = null;
  const statuses = [];
  const initialized = await context.part5CloudSync.init({
    getSnapshot: () => localSnapshot,
    applySnapshot: async snapshot => { applied = snapshot; localSnapshot = snapshot; },
    onStatus: status => statuses.push(status.state)
  });
  assert.strictEqual(initialized, true);
  assert.strictEqual(applied.marker, "remote", "Thiết bị mới phải nhận snapshot cloud mới hơn");
  assert(statuses.includes("synced"));

  localSnapshot = { ...localSnapshot, marker: "changed-locally", exportedAt: new Date().toISOString() };
  context.part5NotifyChange();
  const synchronized = await context.part5CloudSync.syncNow();
  assert.strictEqual(synchronized, true);
  assert.strictEqual(remoteRow.payload.marker, "changed-locally", "Thay đổi mới trên thiết bị phải được upsert");
  assert(requests.some(request => request.options.method === "POST"));
  assert(requests.every(request => request.options.headers.apikey === "sb_publishable_test"));
  assert(!requests.some(request => JSON.stringify(request).includes("service_role")), "Không được dùng service role ở frontend");
  console.log("cloud-sync-smoke: ok");
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
