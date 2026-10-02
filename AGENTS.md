# Quy tắc xử lý dữ liệu luyện thi TOEIC

## Bối cảnh

Người học sẽ tiếp tục đưa các file Markdown chứa câu hỏi, lựa chọn, đáp án và phần giải thích sau mỗi lần luyện TOEIC. Mục tiêu của repository này là biến các lần luyện riêng lẻ thành một kho kiến thức tích lũy, dễ ôn lại và giúp nhận ra các điểm yếu lặp lại.

## Quy ước nhận diện kết quả

- Một câu được xem là **câu sai** khi có dấu hiệu kết quả sai rõ ràng, bao gồm nhưng không giới hạn ở:
  - `Đáp án đúng:<chữ cái>`;
  - `Incorrect — Answer: <chữ cái>` hoặc biến thể dùng dấu gạch ngang khác;
  - các biến thể tương đương, không phân biệt hoa/thường và linh hoạt khoảng trắng, miễn là thể hiện rõ người học trả lời sai và chỉ ra đáp án đúng.
- Chữ cái trong dấu hiệu kết quả sai là đáp án đúng. Không yêu cầu file phải dùng đúng một mẫu cố định.
- Nếu câu không có bất kỳ dấu hiệu kết quả sai rõ ràng nào, xếp câu vào nhóm đúng/không được đánh dấu sai. Tuy nhiên, **không được bỏ qua** câu này vì đáp án có thể được chọn ngẫu nhiên hoặc kiến thức chưa thực sự chắc.
- Khi thống kê, gọi hai nhóm lần lượt là **câu sai** và **câu đúng/không được đánh dấu sai**. Không được diễn giải nhóm thứ hai là kiến thức người học đã thành thạo.
- Nếu nội dung giải thích chỉ cho biết đáp án nhưng không có dấu hiệu cho thấy người học đã trả lời sai, vẫn giữ câu đó trong nhóm đúng/không được đánh dấu sai.

## File kiến thức tích lũy

- Part 5 dùng hai file có vai trò tách biệt:
  - `PART5_THEORY.md`: kho lý thuyết hoàn chỉnh, được rút ra từ **tất cả câu đã luyện**, gồm cả câu đúng và câu sai.
  - `PART5.md`: hồ sơ lỗi cá nhân, **chỉ chứa các câu/chủ điểm người học đã làm sai**.
- Nếu sau này áp dụng cho Part khác, dùng cùng quy ước: `PARTx_THEORY.md` cho lý thuyết chung và `PARTx.md` cho lỗi cá nhân.
- Đây là các file **tích lũy**: cập nhật và hợp nhất nội dung mới, không xóa kiến thức từ các lần luyện trước.
- Luôn ghi nguồn theo tên file và số câu để có thể truy ngược.

## Đồng bộ giao diện web

- Mỗi lần cập nhật dữ liệu từ một bài luyện mới, **bắt buộc cập nhật cả giao diện trong thư mục `web/`**; không được chỉ cập nhật `PART5.md` và `PART5_THEORY.md`.
- Giữ dữ liệu và logic giao diện tách biệt theo cấu trúc sau:
  - `web/app.js`: chỉ chứa trạng thái, bộ lọc, hàm render và xử lý tương tác;
  - `web/data/tests.js`: danh mục đề và thứ tự mới nhất → cũ nhất;
  - `web/data/errors.js`: toàn bộ bản ghi câu sai;
  - `web/data/weak-topics.js`: chủ đề yếu, bảng kiến thức, ví dụ và metadata nguồn dùng cho bộ lọc;
  - `web/data/theory.js`: kho lý thuyết đầy đủ trên web;
  - `web/data/vocabulary.js`: các nhóm từ vựng và collocation;
  - `web/data/quiz.js`: dữ liệu luyện nhanh;
  - `web/data/study.js`: flashcard và trắc nghiệm biên soạn theo từng chủ đề yếu;
  - `web/study-engine.js`: lịch FSRS, phiên học, lưu trữ và kiểm tra dữ liệu tiến độ;
  - `web/vendor/`: thư viện bên thứ ba được ghim phiên bản để web hoạt động offline.
- Không đưa dữ liệu bài luyện trở lại `web/app.js`. Khi thêm loại dữ liệu mới, cập nhật file phù hợp trong `web/data/` và bảo đảm `web/index.html` tải file dữ liệu trước `app.js`.
- Nội dung web phải đồng bộ với các file Markdown tích lũy, tối thiểu gồm:
  - tổng số câu đã xử lý, số câu sai và số chủ đề yếu;
  - toàn bộ câu sai, đáp án đúng, lựa chọn, loại lỗi, manh mối, lời giải và quy tắc chốt;
  - lý thuyết rút ra từ mọi câu, kể cả câu đúng/không được đánh dấu sai;
  - từ vựng, họ từ, cụm cố định và collocation mới;
  - dữ liệu luyện nhanh phù hợp với các lỗi mới.
- Khi thêm câu sai vào web, mỗi câu phải có ID duy nhất và được gắn vào đúng một chủ đề chính; không được để thiếu câu, trùng ID hoặc gắn một câu đầy đủ vào nhiều chủ đề.
- Mỗi dòng cấu trúc/lý thuyết và mỗi ví dụ trong tab “Sổ tay điểm yếu” phải có metadata xác định nguồn đề. Bộ lọc theo đề phải áp dụng đồng thời cho thống kê, chủ đề, bảng lý thuyết, ví dụ mẫu và các thẻ câu sai; không được để kiến thức của đề không được chọn xuất hiện trong kết quả đã lọc.
- Tab “Lý thuyết đầy đủ” duy trì 10 nhóm ngữ pháp ổn định theo thứ tự: **Thì; To V và V-ing; Động từ khiếm khuyết; So sánh; Câu bị động; Hòa hợp chủ ngữ–động từ; Câu điều kiện; Từ loại; Phân từ; Mệnh đề**.
- Trong “Sổ tay điểm yếu”, lỗi thuộc các nhóm ngữ pháp trên phải được xếp vào từng chủ điểm riêng tương ứng; không gộp “dạng động từ” với “hòa hợp chủ ngữ–động từ”. Chủ điểm chưa có câu sai không cần hiển thị trong sổ tay điểm yếu nhưng vẫn phải có trong tab “Lý thuyết đầy đủ”.
- Mỗi chủ đề yếu hiển thị trên web phải có chế độ học riêng. Khi tạo chủ đề mới, bắt buộc:
  - biên soạn flashcard theo từng khái niệm/quy tắc/bẫy quan trọng, dùng ID ổn định và gắn `topicId`, `sourceTestIds`;
  - biên soạn đúng 10 câu trắc nghiệm có ID ổn định, lựa chọn mang ID riêng, đáp án và lời giải;
  - bảo đảm bộ lọc đề áp dụng cho cả flashcard và trắc nghiệm, không làm lẫn kiến thức từ đề khác;
  - không dùng kết quả quiz hoặc lịch FSRS để tự động đánh dấu câu sai là “Đã nắm chắc”.
- Flashcard dùng FSRS với mức ghi nhớ mục tiêu 90%; tiến độ và review log chỉ nằm trong localStorage/bản sao lưu, còn nội dung thẻ phải nằm trong `web/data/study.js`. Mỗi phiên học ưu tiên toàn bộ thẻ đến hạn rồi thêm tối đa 5 thẻ mới.
- Khi thêm họ từ, giao diện web phải gộp tên họ bằng một ô chung cho các dòng liên tiếp và có đường phân cách rõ giữa các họ.
- Không ghi cứng số liệu ở nhiều nơi mà bỏ sót khi cập nhật. Nếu giao diện hiện vẫn có số liệu tĩnh, phải tìm và đồng bộ tất cả vị trí liên quan như thanh điều hướng, thẻ tổng quan, tiến độ và mô tả trang.
- Sau khi cập nhật web, phải kiểm tra tối thiểu:
  1. JavaScript không có lỗi cú pháp và trang render được;
  2. số bản ghi lỗi duy nhất trên web khớp `PART5.md`;
  3. mọi câu sai thuộc đúng một chủ đề chính;
  4. số câu, thống kê chủ đề, họ từ, từ vựng và bài luyện nhanh hiển thị đúng;
  5. chức năng tìm kiếm, đánh dấu đã nắm và điều hướng không bị hỏng do dữ liệu mới.
  6. ID flashcard/quiz không trùng, mọi `topicId`/`sourceTestIds` hợp lệ và mỗi chủ đề yếu có đúng 10 câu quiz;
  7. FSRS lưu/khôi phục đúng lịch, quiz không thay đổi FSRS và xuất/nhập JSON không nhận dữ liệu sai schema.

## Quy trình khi có bài luyện mới

1. Đọc toàn bộ file nguồn bằng UTF-8 và xác định phạm vi số câu.
2. Phân loại câu sai bằng các dấu hiệu kết quả sai linh hoạt nêu trên; thống kê riêng câu đúng/không được đánh dấu sai.
3. Tự xác minh đáp án từ câu, lựa chọn và lời giải. Nếu lời giải có dấu hiệu sai hoặc thiếu chính xác, không sao chép máy móc: ghi chú điểm bất thường và dùng cách giải thích chuẩn hơn.
4. Trích xuất kiến thức từ **mọi câu** và cập nhật vào `PART5_THEORY.md`, bao gồm:
   - ngữ pháp và cấu trúc câu;
   - từ loại và họ từ;
   - giới từ, cụm cố định và collocation;
   - từ vựng theo ngữ cảnh TOEIC;
   - dấu hiệu nhận biết, bẫy và cách loại đáp án.
5. Chỉ đưa các câu có dấu hiệu kết quả sai rõ ràng vào `PART5.md`. Với mỗi câu sai, ghi nguyên nhân, lý thuyết tối thiểu cần nhớ, bẫy và liên kết tới mục tương ứng trong `PART5_THEORY.md`.
6. Hợp nhất với kiến thức đã có: tránh tạo nhiều mục trùng nhau. Nếu một điểm sai xuất hiện lại, tăng số lần sai và bổ sung nguồn để thể hiện lỗi lặp lại.
7. Kiểm tra bảng câu sai trong `PART5.md` đủ tất cả và chỉ gồm các câu có dấu hiệu kết quả sai rõ ràng.
8. Đồng bộ nội dung tương ứng vào `web/` theo mục “Đồng bộ giao diện web” và chạy kiểm tra tính nhất quán trước khi hoàn tất.

## Quy tắc chống trùng lặp và hợp nhất

- Trước khi thêm kiến thức, luôn tìm trong `PART5.md` và `PART5_THEORY.md` theo **cấu trúc chuẩn hóa**, không chỉ theo tiêu đề. Ví dụ `on behalf of`, `on ... behalf of` và câu điền từ `on _____ of` phải được xem là cùng một kiến thức.
- Mỗi kiến thức/cấu trúc chỉ có **một mục lý thuyết chính**. Khi gặp lại:
  - không tạo tiêu đề hoặc bảng lý thuyết mới;
  - bổ sung ví dụ mới nếu ví dụ đó có giá trị;
  - bổ sung số câu và nguồn vào mục đang có;
  - tăng số lần sai và gắn nhãn `Lỗi lặp lại` nếu người học tiếp tục sai.
- Mỗi câu được định danh bằng khóa `đường-dẫn-nguồn + số-câu`. Nếu khóa này đã tồn tại, không thêm câu lần thứ hai.
- Hai bài khác nhau có cùng số câu vẫn là hai bản ghi khác nhau nếu đường dẫn nguồn khác nhau.
- Nếu một câu liên quan đến nhiều kiến thức, chỉ lưu câu đầy đủ tại **một chủ đề chính**; các chủ đề phụ chỉ tham chiếu tới câu đó, không sao chép toàn bộ lời giải.
- Khi tên chủ đề mới gần nghĩa với chủ đề đã có, ưu tiên mở rộng chủ đề hiện có. Chỉ tạo chủ đề mới khi quy tắc nhận diện hoặc cách giải thực sự khác.
- Sau khi hợp nhất, kiểm tra:
  1. không có hai tiêu đề lý thuyết mô tả cùng một cấu trúc;
  2. không có hai dòng mang cùng khóa nguồn + số câu;
  3. tổng số câu sai duy nhất khớp với dữ liệu nguồn đã xử lý;
  4. số lần sai của từng chủ đề được cập nhật đúng.

## Chuẩn nội dung cho `PART5_THEORY.md`

- Viết giải thích bằng tiếng Việt rõ ràng; giữ từ/cụm tiếng Anh cần học.
- Không chép lại toàn bộ đề nếu không cần thiết. Ưu tiên quy tắc có thể tái sử dụng và ví dụ/cụm từ ngắn.
- Tổ chức theo nguyên tắc **lý thuyết tổng quát trước, câu hỏi minh họa sau**. Không lấy từng đề hoặc từng câu làm cấu trúc chính của sổ tay.
- Duy trì các nhóm kiến thức ổn định để bổ sung lâu dài, tối thiểu gồm:
  1. Thì và dạng động từ;
  2. Mệnh đề và cấu trúc câu;
  3. Từ loại và cấu tạo từ;
  4. Đại từ;
  5. Giới từ;
  6. Liên từ và từ nối;
  7. So sánh;
  8. Sự hòa hợp chủ ngữ–động từ;
  9. Câu bị động;
  10. Từ vựng, cụm cố định và collocation.
- Nếu lần luyện sau xuất hiện kiến thức mới thuộc một nhóm đã có, bổ sung vào đúng nhóm đó. Ví dụ: một thì mới phải thêm vào mục “Thì và dạng động từ”, không tạo một mục rời theo tên bài kiểm tra.
- Nếu gặp một chủ điểm thật sự mới, có thể tạo nhóm mới ở cùng cấp và giữ lại cho các lần cập nhật sau.
- Trong mỗi chủ điểm, trình bày theo thứ tự: **lý thuyết/quy tắc → dấu hiệu nhận biết → bẫy thường gặp → ví dụ từ bài luyện và nguồn câu**.
- Mọi câu, kể cả câu đúng/không đánh dấu sai, đều có thể đóng góp lý thuyết, ví dụ, từ vựng hoặc collocation vào file này.
- Phân biệt rõ các từ dễ nhầm về nghĩa hoặc chức năng ngữ pháp, ví dụ `beforehand` và `ahead of`, danh từ và trạng từ, chủ động và bị động.
- Dùng Markdown nhất quán, dễ quét và dễ nối thêm dữ liệu ở lần sau.

## Chuẩn nội dung cho `PART5.md`

- Chỉ tập trung vào những **chủ đề người học còn yếu**, được xác định từ các câu có dấu hiệu kết quả sai rõ ràng; không đưa chủ đề chỉ xuất hiện ở câu đúng/không được đánh dấu sai vào file này.
- Tổ chức theo **chủ đề yếu**, không tổ chức thành danh sách câu sai ngay từ đầu.
- Trong mỗi chủ đề, bắt buộc trình bày theo thứ tự:
  1. lý thuyết tổng quát cần nắm;
  2. bảng cấu trúc/cách dùng/nghĩa và thành phần theo sau;
  3. ví dụ mẫu ngắn;
  4. mục có thể mở rộng chứa các câu đã làm sai thuộc chủ đề đó và lời giải.
- Ví dụ với chủ đề giới từ: trước tiên phân loại giới từ chỉ thời gian, hướng, vai trò, lĩnh vực và các cụm cố định; ghi rõ nghĩa, cấu trúc theo sau và ví dụ; sau đó mới liệt kê các câu sai 101, 102, 105... trong mục mở rộng.
- Mỗi câu sai phải có: nguồn, số câu, đáp án đúng, loại lỗi, manh mối, lý do từng lựa chọn đúng/sai và quy tắc chốt.
- Tổng hợp số câu sai theo chủ đề và đếm lỗi lặp lại để nhận ra mức ưu tiên.
- Khi thêm câu mới vào một chủ đề đã tồn tại, giữ nguyên phần lý thuyết chung; chỉ mở rộng bảng nếu xuất hiện cách dùng mới, thêm ví dụ cần thiết và thêm câu vào mục “Các câu đã làm sai”.
- Không tạo lại một chương như “Giới từ 2” hoặc một mục lý thuyết `on behalf of` thứ hai chỉ vì kiến thức xuất hiện trong bài luyện khác.
- Khi thêm một từ thuộc chủ đề **họ từ**, không được chỉ thêm riêng đáp án xuất hiện trong câu. Phải bổ sung cả họ từ thông dụng và hữu ích cho TOEIC, tối thiểu kiểm tra các dạng: động từ, danh từ, danh từ chỉ người, tính từ `-ed`, tính từ `-ing` hoặc tính từ dẫn xuất, và trạng từ. Dạng nào không tồn tại hoặc rất hiếm thì ghi `—`, không tự tạo từ.
- Các thành viên cùng họ phải được đặt cạnh nhau trong cùng bảng, có nghĩa, từ loại, vai trò và ví dụ/phân biệt. Ví dụ khi thêm `surprisingly`, phải đồng thời có `surprise`, `surprised`, `surprising`, `surprisingly`.
- Trong giao diện web, cột tên họ từ phải được gộp theo nhóm và chỉ hiển thị một lần cho các dòng liên tiếp cùng họ. Mỗi họ từ mới phải có đường phân cách ngang rõ ràng để dễ quét; không lặp tên họ ở từng dòng.
- Phần lý thuyết trong `PART5.md` chỉ bao phủ các chủ đề yếu thực tế. Kho lý thuyết toàn diện từ mọi câu vẫn nằm trong `PART5_THEORY.md`.
- Nếu một câu sai liên quan nhiều chủ điểm, chọn một chủ điểm chính và ghi thêm các chủ điểm phụ khi cần.

## Nguyên tắc chất lượng

- Không suy đoán lựa chọn ban đầu của người học; dữ liệu chỉ cho biết câu nào sai, không cho biết người học đã chọn phương án nào.
- Không đánh đồng “làm đúng” với “đã chắc kiến thức”; kiến thức từ câu đúng vẫn phải được đưa vào `PART5_THEORY.md`.
- Không thêm định nghĩa dài dòng không phục vụ TOEIC Part 5.
- Không làm mất dấu tiếng Việt và không thay đổi file bài luyện gốc nếu người học không yêu cầu.
- Sau mỗi lần cập nhật, kiểm tra số câu sai duy nhất trong `PART5.md` khớp với tổng số câu có dấu hiệu kết quả sai rõ ràng trong các nguồn đã xử lý.
