# TOEIC Part 5 · Sổ tay tự học

Web tĩnh để học từ toàn bộ dữ liệu trong repository: sổ lỗi cá nhân, lý thuyết đầy đủ, từ vựng, luyện nhanh, flashcard FSRS và quiz theo từng chủ đề yếu.

## Chạy trên máy

Yêu cầu Node.js 18 trở lên.

```powershell
npm start
```

Mở `http://127.0.0.1:4173`. Chạy kiểm tra bằng:

```powershell
npm run check
```

## Dữ liệu và tiến trình

- Nội dung kiến thức nằm trong `web/data/` và được cập nhật cùng `PART5.md`, `PART5_THEORY.md`.
- Tiến trình học được tự động lưu trong localStorage của đúng trình duyệt và đúng tên miền đang mở.
- Trang **Tiến trình** cho phép xuất một file JSON gồm lịch FSRS, nhật ký ôn, kết quả quiz, bộ lọc đề và trạng thái “đã nắm chắc”. Hãy xuất file trước khi đổi trình duyệt, xóa dữ liệu website hoặc chuyển thiết bị.
- Website có service worker nên sau lần tải đầu tiên có thể mở lại khi mất mạng. Khi trình duyệt hỗ trợ, nút **Cài ứng dụng** sẽ xuất hiện trên thanh đầu trang.

## Deploy nhanh

### GitHub Pages

Đẩy repository lên GitHub. Workflow `.github/workflows/deploy-pages.yml` tự kiểm tra và deploy thư mục `web/` khi có commit trên nhánh `main` hoặc `master`. Trong **Settings → Pages**, chọn nguồn **GitHub Actions** nếu repository chưa bật Pages.

### Netlify

Import repository vào Netlify. File `netlify.toml` đã đặt publish directory là `web`, không cần build command. Bạn cũng có thể kéo thả trực tiếp thư mục `web/` vào Netlify Drop.

### Vercel

Import repository vào Vercel với preset **Other**. `vercel.json` phục vụ trực tiếp nội dung trong `web/`; không cần build command.

Mỗi tên miền có vùng localStorage riêng. Sau khi đổi URL deploy, hãy xuất JSON ở URL cũ và nhập vào URL mới để mang theo tiến trình.
