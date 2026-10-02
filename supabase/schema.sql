-- Chạy toàn bộ file này một lần trong Supabase Dashboard → SQL Editor.
-- Mô hình một người dùng, không đăng nhập: mọi trình duyệt dùng publishable key
-- đều đọc/ghi bản ghi có id = 'primary'. Không đặt dữ liệu nhạy cảm trong payload.

create table if not exists public.toeic_sync (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint toeic_sync_single_record check (id = 'primary')
);

alter table public.toeic_sync enable row level security;

revoke all on table public.toeic_sync from anon, authenticated;
grant select, insert, update on table public.toeic_sync to anon;

drop policy if exists "TOEIC public read" on public.toeic_sync;
create policy "TOEIC public read"
on public.toeic_sync for select
to anon
using (id = 'primary');

drop policy if exists "TOEIC public insert" on public.toeic_sync;
create policy "TOEIC public insert"
on public.toeic_sync for insert
to anon
with check (id = 'primary');

drop policy if exists "TOEIC public update" on public.toeic_sync;
create policy "TOEIC public update"
on public.toeic_sync for update
to anon
using (id = 'primary')
with check (id = 'primary');
