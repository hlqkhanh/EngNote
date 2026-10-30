window.part5Data = window.part5Data || {};

window.part5Data.theory = [
  { id: "tenses", title: "Thì (Tenses)", lessons: [
    { title: "Nhóm thì hiện tại", source: "Collection 1 · Test 1, câu 108–109; Parroto 2026, câu 109–110", definition: "Hiện tại đơn diễn tả thói quen, sự thật và lịch trình; hiện tại tiếp diễn diễn tả việc đang xảy ra hoặc kế hoạch gần; hiện tại hoàn thành nối quá khứ với hiện tại; hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình kéo dài.", pattern: "S + V(s/es) | am/is/are + V-ing | have/has + V3 | have/has been + V-ing", signals: ["every/usually", "now/currently", "since/for", "so far/recently"], trap: "Có mốc tương lai không đồng nghĩa luôn dùng will; lịch trình cố định có thể dùng hiện tại đơn.", example: "The permit expires at midnight tonight." },
    { title: "Nhóm thì quá khứ", source: "Tài liệu ngữ pháp tham khảo", definition: "Quá khứ đơn kể sự việc đã kết thúc; quá khứ tiếp diễn nêu hành động đang diễn ra tại một thời điểm; quá khứ hoàn thành chỉ việc xảy ra trước một mốc quá khứ; dạng hoàn thành tiếp diễn nhấn mạnh khoảng kéo dài trước mốc đó.", pattern: "S + V2/ed | was/were + V-ing | had + V3 | had been + V-ing", signals: ["yesterday/ago/last", "at that time", "by the time", "before + past event"], trap: "Hai hành động quá khứ không bắt buộc đều dùng quá khứ hoàn thành; chỉ hành động xảy ra trước mới dùng had + V3.", example: "The crew had finished the repair before the office reopened." },
    { title: "Nhóm thì tương lai", source: "Collection 1 · Test 2, câu 108, 123", definition: "Will + V dùng cho dự đoán hoặc quyết định; be going to cho kế hoạch/dấu hiệu rõ; tương lai tiếp diễn cho việc đang diễn ra; tương lai hoàn thành cho việc hoàn tất trước một mốc tương lai.", pattern: "will + V | be going to + V | will be + V-ing | will have + V3", signals: ["tomorrow/next", "this time next", "by + mốc tương lai"], trap: "Sau when, once, as soon as, before, after và until, mệnh đề thời gian thường dùng hiện tại đơn dù nói về tương lai.", example: "As soon as the shipment arrives, we will inspect it." }
  ]},
  { id: "infinitives-gerunds", title: "To V và V-ing", lessons: [
    { title: "To-infinitive", source: "Parroto 2026 · câu 115, 122", definition: "To V thường đứng sau want, wish, plan, decide, hope, agree, aim và dùng để chỉ mục đích.", pattern: "verb + to V | to V (purpose)", signals: ["wish/plan/decide", "để làm gì"], trap: "To V không phải động từ chính đã chia khi mệnh đề đang thiếu vị ngữ.", example: "Residents who wish to sell should contact the agent." },
    { title: "Gerund", source: "Parroto 2026 · câu 117", definition: "V-ing có thể làm chủ ngữ, tân ngữ hoặc đứng sau giới từ và các động từ như avoid, enjoy, consider, finish.", pattern: "V-ing + singular verb | preposition + V-ing | verb + V-ing", signals: ["sau giới từ", "avoid/enjoy/consider"], trap: "Không dùng to V trực tiếp sau một giới từ thông thường.", example: "He played a role in obtaining the contract." },
    { title: "Động từ đổi nghĩa theo dạng sau", source: "Tài liệu ngữ pháp tham khảo", definition: "Một số động từ nhận cả to V và V-ing nhưng đổi nghĩa: remember/forget, stop, try, regret.", pattern: "stop V-ing ≠ stop to V | remember V-ing ≠ remember to V", signals: ["ngừng một việc", "dừng lại để làm việc khác"], trap: "Không chọn chỉ theo hình thức; phải kiểm tra nghĩa của cả cụm.", example: "The technician stopped working to answer the call." }
  ]},
  { id: "modals", title: "Động từ khiếm khuyết", lessons: [
    { title: "Modal + bare infinitive", source: "Collection 1 · Test 1, câu 116; Parroto 2026, câu 111", definition: "Can, could, may, might, must, should và will đi với động từ nguyên mẫu không to; không thêm -s ở ngôi thứ ba.", pattern: "modal + V | modal + not + V", signals: ["khả năng", "nghĩa vụ", "lời khuyên", "dự đoán"], trap: "Không dùng modal + to V hoặc modal + V-s/es.", example: "The clerk can process the request promptly." },
    { title: "Nghĩa thường gặp", source: "Tài liệu ngữ pháp tham khảo", definition: "Must/have to chỉ nghĩa vụ; should/ought to chỉ lời khuyên; may/might/could chỉ khả năng; can/could chỉ năng lực hoặc lời đề nghị lịch sự.", pattern: "must/have to | should/ought to | may/might/could", signals: ["required", "recommended", "possible", "ability"], trap: "Must not là cấm; do not have to là không cần thiết.", example: "Employees must wear badges, but visitors do not have to." },
    { title: "Modal ở thể bị động và hoàn thành", source: "Tài liệu ngữ pháp tham khảo", definition: "Dùng modal + be + V3 khi chủ ngữ nhận hành động; modal + have + V3 để suy đoán hoặc đánh giá việc đã qua.", pattern: "modal + be + V3 | modal + have + V3", signals: ["chủ ngữ nhận tác động", "suy đoán quá khứ"], trap: "Sau modal vẫn giữ be/have ở nguyên mẫu.", example: "The application must be submitted by Friday." }
  ]},
  { id: "comparisons", title: "So sánh", lessons: [
    { title: "So sánh bằng và hơn", source: "Tài liệu ngữ pháp tham khảo", definition: "So sánh bằng dùng as ... as; so sánh hơn dùng -er hoặc more, thường đi với than.", pattern: "as + adj/adv + as | adj-er/more + adj + than", signals: ["as ... as", "than", "much/far/even"], trap: "Không dùng đồng thời more và hậu tố -er.", example: "The new process is more efficient than the old one." },
    { title: "So sánh nhất", source: "Collection 1 · Test 2, câu 117", definition: "Tính từ ngắn dùng the + adj-est; tính từ dài dùng the most + adjective. Có thể đứng trước danh từ.", pattern: "the + adj-est | the most + adjective (+ noun)", signals: ["in/of a group", "one of the"], trap: "Sau one of the + superlative phải là danh từ số nhiều.", example: "It is the most innovative feature in the product line." },
    { title: "So sánh bội số và kép", source: "Tài liệu ngữ pháp tham khảo", definition: "Bội số thường đặt trước as ... as; so sánh kép diễn tả hai thay đổi song hành.", pattern: "twice as + adj + as | the + comparative, the + comparative", signals: ["twice/three times", "càng ... càng"], trap: "Giữ cấu trúc song song ở cả hai vế.", example: "The sooner we respond, the more satisfied the customer will be." }
  ]},
  { id: "passive", title: "Câu bị động", lessons: [
    { title: "Cấu trúc cốt lõi", source: "Collection 1 · Test 2, câu 108, 117, 122", definition: "Dùng be + V3/ed khi chủ ngữ nhận hành động. Be phải được chia theo thì và chủ ngữ.", pattern: "S + be + V3/ed (+ by + agent)", signals: ["chủ ngữ không tự thực hiện", "by + tác nhân"], trap: "Không chọn bị động chỉ vì thấy be + V3 đúng hình thức; phải kiểm tra vai trò nghĩa của chủ ngữ.", example: "The guidelines had been clearly explained." },
    { title: "Bị động theo thì", source: "Tài liệu ngữ pháp tham khảo", definition: "Giữ dấu hiệu của thì trên động từ be: is processed, was processed, has been processed, will be processed.", pattern: "tense of be + V3", signals: ["every day", "yesterday", "since", "next week"], trap: "Không bỏ been trong bị động của thì hoàn thành.", example: "The refund will be processed within five business days." },
    { title: "Bị động với modal", source: "Tài liệu ngữ pháp tham khảo", definition: "Sau động từ khiếm khuyết, dùng modal + be + V3/ed.", pattern: "modal + be + V3/ed", signals: ["must/should/can", "chủ ngữ nhận hành động"], trap: "Không chia be sau modal.", example: "All forms must be signed before submission." }
  ]},
  { id: "agreement", title: "Hòa hợp chủ ngữ–động từ", lessons: [
    { title: "Chủ ngữ số ít và số nhiều", source: "Collection 1 · Test 1, câu 109; Parroto 2026, câu 109–110", definition: "Ở hiện tại đơn, chủ ngữ ngôi thứ ba số ít dùng V-s/es; chủ ngữ số nhiều dùng động từ nguyên mẫu.", pattern: "singular S + V-s/es | plural S + V", signals: ["company/manager", "employees/registers"], trap: "Tên công ty là chủ ngữ số ít.", example: "The manager posts a daily report." },
    { title: "Danh từ trung tâm", source: "Parroto 2026 · câu 124", definition: "Động từ hòa hợp với danh từ trung tâm, không theo danh từ nằm trong cụm of, with, together with hoặc as well as.", pattern: "head noun + modifier + verb", signals: ["of/with/as well as", "cụm chen giữa"], trap: "Danh từ gần động từ nhất chưa chắc là chủ ngữ.", example: "The list of restrictions has been updated." },
    { title: "Chủ ngữ đặc biệt", source: "Tài liệu ngữ pháp tham khảo", definition: "Each, every, either, neither và cụm V-ing thường đi với động từ số ít; both, many, several đi với số nhiều.", pattern: "each/every/neither + singular verb | V-ing + singular verb", signals: ["each/every", "V-ing đầu câu"], trap: "Neither of + plural noun vẫn thường dùng động từ số ít trong văn phong TOEIC.", example: "Reviewing supplier orders takes time." }
  ]},
  { id: "conditionals", title: "Câu điều kiện", lessons: [
    { title: "Loại 0 và loại 1", source: "Collection 1 · Test 1, câu 122", definition: "Loại 0 nói sự thật/quy trình; loại 1 nói điều kiện có khả năng xảy ra ở hiện tại hoặc tương lai.", pattern: "If + present, present | If + present, will + V", signals: ["quy trình", "khả năng tương lai"], trap: "Không dùng will trong mệnh đề if của điều kiện loại 1.", example: "Parcels will be returned if they remain unclaimed." },
    { title: "Loại 2 và loại 3", source: "Tài liệu ngữ pháp tham khảo", definition: "Loại 2 diễn tả tình huống không thật/khó xảy ra ở hiện tại; loại 3 diễn tả điều trái với quá khứ.", pattern: "If + past, would + V | If + had V3, would have V3", signals: ["hypothetical", "regret about the past"], trap: "Were có thể dùng cho mọi chủ ngữ trong giả định trang trọng.", example: "If the budget were larger, we would hire more staff." },
    { title: "Unless và đảo ngữ", source: "Tài liệu ngữ pháp tham khảo", definition: "Unless mang nghĩa if ... not. Với văn phong trang trọng có thể đảo had/should/were lên trước chủ ngữ.", pattern: "unless + affirmative clause | Had/Should/Were + S ...", signals: ["trừ khi", "điều kiện trang trọng"], trap: "Không thêm not sau unless nếu không chủ ý tạo phủ định kép.", example: "Unless payment is received, the order will be canceled." }
  ]},
  { id: "parts-of-speech", title: "Từ loại", lessons: [
    { title: "Danh từ, động từ, tính từ và trạng từ", source: "Collection 1 · Test 1, câu 104, 114; Test 2, câu 124; Parroto 2026, câu 112", definition: "Xác định từ loại bằng vị trí rồi kiểm tra nghĩa: danh từ làm chủ/tân ngữ; động từ làm vị ngữ; tính từ bổ nghĩa danh từ hoặc sau linking verb; trạng từ bổ nghĩa động từ, tính từ hay cả câu.", pattern: "adj + noun | linking verb + adj | adv + adj/verb", signals: ["mạo từ", "danh từ phía sau", "linking verb", "hậu tố"], trap: "Đúng từ loại chưa đủ; operator và operation đều là danh từ nhưng khác vai trò.", example: "The refrigerator has a surprisingly compact exterior." },
    { title: "Họ từ", source: "Collection 1 · Test 1, câu 114; Test 2, câu 124; Parroto 2026, câu 112", definition: "Học các dạng thông dụng cạnh nhau để phân biệt người, vật, quá trình, đặc tính và cách thức.", pattern: "operate → operation/operator/operational | surprise → surprised/surprising/surprisingly", signals: ["-tion/-ment", "-or/-er", "-al/-ive", "-ly"], trap: "Không tự tạo dạng từ chỉ dựa vào hậu tố.", example: "The operator confirmed that the system was fully operational." },
    { title: "Đại từ và từ hạn định", source: "Collection 1 · Test 1, câu 102, 117, 119, 128", definition: "Đại từ phải đúng chức năng chủ ngữ, tân ngữ hoặc sở hữu; từ hạn định đứng trước danh từ và cho biết số lượng/phạm vi.", pattern: "they/them/their/theirs | any + plural/uncountable noun | those + V-ing", signals: ["sau giới từ", "trước danh từ", "đứng độc lập"], trap: "Tính từ sở hữu phải có danh từ theo sau; đại từ sở hữu thì không.", example: "The course is recommended for those seeking new skills." },
    { title: "Giới từ và liên từ", source: "Collection 1 · Test 1–2; Parroto 2026", definition: "Giới từ nhận danh từ/cụm danh từ/V-ing; liên từ phụ thuộc nhận mệnh đề có chủ ngữ và động từ.", pattern: "preposition + noun/V-ing | conjunction + S + V", signals: ["because/because of", "although/despite", "in/on/at"], trap: "Hai từ gần nghĩa có thể yêu cầu thành phần theo sau khác nhau.", example: "The elevators are closed because the crew must replace the cables." }
  ]},
  { id: "participles", title: "Phân từ", lessons: [
    { title: "Hiện tại phân từ và quá khứ phân từ", source: "Collection 1 · Test 2, câu 103", definition: "V-ing mang nghĩa chủ động/đang diễn ra; V3/ed thường mang nghĩa bị động/đã hoàn tất.", pattern: "V-ing: active | V3/ed: passive/completed", signals: ["chủ thể thực hiện", "chủ thể nhận tác động"], trap: "Chọn theo quan hệ nghĩa với danh từ, không chỉ theo vị trí.", example: "Commenting on the results, Ms. Carraway assured the staff." },
    { title: "Tính từ -ing và -ed", source: "Collection 1 · Test 1, câu 114", definition: "Tính từ -ing mô tả điều gây cảm xúc; tính từ -ed mô tả người/vật cảm nhận cảm xúc.", pattern: "surprising result | surprised employees", signals: ["cause of feeling", "receiver of feeling"], trap: "Vật vẫn có thể dùng -ed nếu nó ở trạng thái chịu tác động; cần xét nghĩa thật.", example: "The surprising result left the team surprised." },
    { title: "Mệnh đề phân từ rút gọn", source: "Collection 1 · Test 2, câu 103", definition: "Khi hai mệnh đề cùng chủ ngữ, có thể rút gọn mệnh đề phụ bằng V-ing nếu chủ động hoặc V3/ed nếu bị động.", pattern: "V-ing ..., S + V | V3/ed ..., S + V", signals: ["đầu câu", "dấu phẩy", "cùng chủ ngữ"], trap: "Tránh dangling participle: chủ ngữ mệnh đề chính phải là chủ thể logic của phân từ.", example: "Approved by the board, the proposal moved forward." }
  ]},
  { id: "clauses", title: "Mệnh đề", lessons: [
    { title: "Mệnh đề độc lập và phụ thuộc", source: "Collection 1 · Test 1, câu 111, 113", definition: "Mệnh đề độc lập có thể đứng thành câu; mệnh đề phụ thuộc cần liên từ để thể hiện nguyên nhân, thời gian, điều kiện, nhượng bộ hoặc mục đích.", pattern: "subordinator + S + V, S + V", signals: ["because/although/if/when/so that"], trap: "Therefore là trạng từ nối và cần dấu câu phù hợp, không hoạt động như because.", example: "The elevators are unavailable because the crew must replace the cables." },
    { title: "Mệnh đề quan hệ", source: "Collection 1 · Test 1, câu 106–107; Parroto 2026, câu 101", definition: "Who/whom/whose dùng cho người; which cho vật/sự việc; that có thể thay who/which trong mệnh đề xác định. Giới từ có thể đứng trước which/whom.", pattern: "noun + relative pronoun + clause | preposition + which/whom", signals: ["danh từ đứng trước", "chỗ trống trong mệnh đề sau"], trap: "Whom không làm chủ ngữ; mệnh đề không xác định sau dấu phẩy không dùng that.", example: "The lecture ended, after which attendees asked questions." },
    { title: "Mệnh đề danh từ", source: "Tài liệu ngữ pháp tham khảo", definition: "That, whether/if và từ để hỏi có thể mở đầu một mệnh đề làm chủ ngữ, tân ngữ hoặc bổ ngữ.", pattern: "verb + that/whether/wh-word + S + V", signals: ["know/confirm/decide", "một ý hoàn chỉnh làm tân ngữ"], trap: "Trong mệnh đề danh từ gián tiếp dùng trật tự câu khẳng định, không đảo như câu hỏi.", example: "Please confirm whether the shipment has arrived." },
    { title: "Mệnh đề trạng ngữ và cấu trúc tương phản", source: "Collection 1 · Test 2, câu 106, 122, 126–127; Parroto 2026, câu 118, 121, 128", definition: "Because/although/if/when/so that nhận mệnh đề; because of/despite nhận cụm danh từ hoặc V-ing; rather than nối các thành phần song song.", pattern: "although + clause | despite + noun/V-ing | so that + clause | A rather than B", signals: ["nguyên nhân", "tương phản", "mục đích", "lựa chọn"], trap: "Phải kiểm tra cả quan hệ logic lẫn loại thành phần theo sau.", example: "The director approved it so that the project could move forward." }
  ]}
];

// Bổ sung nguồn: part5_practise/part5_practice_2026-10-30.md
(() => {
  const updates = [
  {
    "sectionId": "tenses",
    "title": "Nhóm thì hiện tại",
    "source": "Collection 1 · Test 1, câu 108–109; Parroto 2026, câu 109–110; part5_practise/part5_practice_2026-10-30.md, câu 112; part5_practise/part5_practice_2026-10-30.md, câu 126",
    "definition": "Hiện tại đơn diễn tả thói quen, sự thật và lịch trình; hiện tại tiếp diễn diễn tả việc đang xảy ra hoặc kế hoạch gần; hiện tại hoàn thành nối quá khứ với hiện tại; hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình kéo dài. Câu 112: Hiện tại tiếp diễn diễn tả sắp xếp tương lai đã lên kế hoạch. Câu 126: over the past ten years chỉ khoảng kéo dài tới hiện tại; undergo changes = trải qua thay đổi.",
    "pattern": "S + V(s/es) | am/is/are + V-ing | have/has + V3 | have/has been + V-ing | am/is/are + V-ing + future time | have/has + V3 + over the past + duration",
    "signals": [
      "every/usually",
      "now/currently",
      "since/for",
      "so far/recently"
    ],
    "trap": "Có mốc tương lai không đồng nghĩa luôn dùng will; lịch trình cố định có thể dùng hiện tại đơn. next weekend không bắt buộc dùng will; represent thiếu -s với chủ ngữ số ít. since nhận mốc bắt đầu, không nhận the past ten years.",
    "example": "The permit expires at midnight tonight. Dr. Cheung is representing the hospital next weekend. (Bài luyện 30/10/2026, 112). has undergone changes over the past ten years (Bài luyện 30/10/2026, 126)."
  },
  {
    "sectionId": "tenses",
    "title": "Nhóm thì quá khứ",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_practice_2026-10-30.md, câu 129",
    "definition": "Quá khứ đơn kể sự việc đã kết thúc; quá khứ tiếp diễn nêu hành động đang diễn ra tại một thời điểm; quá khứ hoàn thành chỉ việc xảy ra trước một mốc quá khứ; dạng hoàn thành tiếp diễn nhấn mạnh khoảng kéo dài trước mốc đó. Câu 129: Quá khứ hoàn thành nhấn mạnh việc sửa lịch xảy ra trước khi khóa học bắt đầu.",
    "pattern": "S + V2/ed | was/were + V-ing | had + V3 | had been + V-ing | had + V3 ... before + past event",
    "signals": [
      "yesterday/ago/last",
      "at that time",
      "by the time",
      "before + past event"
    ],
    "trap": "Hai hành động quá khứ không bắt buộc đều dùng quá khứ hoàn thành; chỉ hành động xảy ra trước mới dùng had + V3. Không phải mọi câu có before đều bắt buộc quá khứ hoàn thành; trong các lựa chọn, C phù hợp trình tự và thể chủ động.",
    "example": "The crew had finished the repair before the office reopened. Long before training began, she had revised the schedule. (Bài luyện 30/10/2026, 129)."
  },
  {
    "sectionId": "tenses",
    "title": "Nhóm thì tương lai",
    "source": "Collection 1 · Test 2, câu 108, 123; part5_practise/part5_practice_2026-10-30.md, câu 130",
    "definition": "Will + V dùng cho dự đoán hoặc quyết định; be going to cho kế hoạch/dấu hiệu rõ; tương lai tiếp diễn cho việc đang diễn ra; tương lai hoàn thành cho việc hoàn tất trước một mốc tương lai. Câu 130: Mệnh đề thời gian tương lai dùng hiện tại đơn hoặc hiện tại hoàn thành để nhấn mạnh hoàn tất.",
    "pattern": "will + V | be going to + V | will be + V-ing | will have + V3 | will + V + once + S + have/has V3",
    "signals": [
      "tomorrow/next",
      "this time next",
      "by + mốc tương lai"
    ],
    "trap": "Sau when, once, as soon as, before, after và until, mệnh đề thời gian thường dùng hiện tại đơn dù nói về tương lai. once không luôn có nghĩa ngay lập tức; nghĩa cốt lõi ở đây là sau khi/một khi điều kiện thời gian hoàn tất.",
    "example": "As soon as the shipment arrives, we will inspect it. He will return once the interns have arrived. (Bài luyện 30/10/2026, 130)."
  },
  {
    "sectionId": "comparisons",
    "title": "So sánh bằng và hơn",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_practice_2026-10-30.md, câu 105",
    "definition": "So sánh bằng dùng as ... as; so sánh hơn dùng -er hoặc more, thường đi với than. Câu 105: Sau are more cần tính từ productive; those thay employees.",
    "pattern": "as + adj/adv + as | adj-er/more + adj + than | be more + adjective + than",
    "signals": [
      "as ... as",
      "than",
      "much/far/even"
    ],
    "trap": "Không dùng đồng thời more và hậu tố -er. production = sản xuất; productivity = năng suất; productively là trạng từ.",
    "example": "The new process is more efficient than the old one. more productive than those who take no breaks (Bài luyện 30/10/2026, 105)."
  },
  {
    "sectionId": "passive",
    "title": "Cấu trúc cốt lõi",
    "source": "Collection 1 · Test 2, câu 108, 117, 122; part5_practise/part5_practice_2026-10-30.md, câu 117",
    "definition": "Dùng be + V3/ed khi chủ ngữ nhận hành động. Be phải được chia theo thì và chủ ngữ. Câu 117: specifically bổ nghĩa hành động thiết kế trong cấu trúc bị động be designed.",
    "pattern": "S + be + V3/ed (+ by + agent) | be specifically designed to V",
    "signals": [
      "chủ ngữ không tự thực hiện",
      "by + tác nhân"
    ],
    "trap": "Không chọn bị động chỉ vì thấy be + V3 đúng hình thức; phải kiểm tra vai trò nghĩa của chủ ngữ. Không cần quy designed thành tính từ mới giải được vị trí trạng từ.",
    "example": "The guidelines had been clearly explained. The app is specifically designed to provide insights. (Bài luyện 30/10/2026, 117)."
  },
  {
    "sectionId": "passive",
    "title": "Bị động theo thì",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_practice_2026-10-30.md, câu 104; part5_practise/part5_practice_2026-10-30.md, câu 120",
    "definition": "Giữ dấu hiệu của thì trên động từ be: is processed, was processed, has been processed, will be processed. Câu 104: Bị động hiện tại hoàn thành: được thăng chức. Câu 120: consistently = nhất quán/qua nhiều lần; bị động hiện tại hoàn thành.",
    "pattern": "tense of be + V3 | have/has been promoted to + position | have/has + adverb + been shown to V",
    "signals": [
      "every day",
      "yesterday",
      "since",
      "next week"
    ],
    "trap": "Không bỏ been trong bị động của thì hoàn thành. Phân biệt promote sản phẩm (quảng bá) với promote nhân viên (thăng chức). Không suy ra hiệu quả xảy ra liên tục mọi lúc; đó là kết quả được ghi nhận nhất quán.",
    "example": "The refund will be processed within five business days. has been promoted to president (Bài luyện 30/10/2026, 104). have consistently been shown to improve skills (Bài luyện 30/10/2026, 120)."
  },
  {
    "sectionId": "agreement",
    "title": "Chủ ngữ số ít và số nhiều",
    "source": "Collection 1 · Test 1, câu 109; Parroto 2026, câu 109–110; part5_practise/part5_practice_2026-10-30.md, câu 118",
    "definition": "Ở hiện tại đơn, chủ ngữ ngôi thứ ba số ít dùng V-s/es; chủ ngữ số nhiều dùng động từ nguyên mẫu. Câu 118: people số nhiều đi với struggle; suggest that ở đây tường thuật kết quả nghiên cứu.",
    "pattern": "singular S + V-s/es | plural S + V | plural people + struggle",
    "signals": [
      "company/manager",
      "employees/registers"
    ],
    "trap": "Tên công ty là chủ ngữ số ít. Không phải suggest đề nghị dùng giả định; struggling/to struggle không tự làm vị ngữ.",
    "example": "The manager posts a daily report. More people struggle with night driving. (Bài luyện 30/10/2026, 118)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Danh từ, động từ, tính từ và trạng từ",
    "source": "Collection 1 · Test 1, câu 104, 114; Test 2, câu 124; Parroto 2026, câu 112; part5_practise/part5_practice_2026-10-30.md, câu 102; part5_practise/part5_practice_2026-10-30.md, câu 103; part5_practise/part5_practice_2026-10-30.md, câu 106; part5_practise/part5_practice_2026-10-30.md, câu 107; part5_practise/part5_practice_2026-10-30.md, câu 108; part5_practise/part5_practice_2026-10-30.md, câu 111; part5_practise/part5_practice_2026-10-30.md, câu 113; part5_practise/part5_practice_2026-10-30.md, câu 121; part5_practise/part5_practice_2026-10-30.md, câu 127",
    "definition": "Xác định từ loại bằng vị trí rồi kiểm tra nghĩa: danh từ làm chủ/tân ngữ; động từ làm vị ngữ; tính từ bổ nghĩa danh từ hoặc sau linking verb; trạng từ bổ nghĩa động từ, tính từ hay cả câu. Câu 102: available = có sẵn/có thể truy cập. Câu 103: conduct a review = tiến hành đánh giá; a yêu cầu danh từ đếm được số ít. Câu 106: Chọn danh từ chỉ người sửa máy, không phải sự thay thế hay gia hạn. Câu 107: nearly = suýt/gần như; near = gần về vị trí/thời gian. Câu 108: probably diễn tả xác suất; merger = sự sáp nhập. Câu 111: acceptable mô tả chất lượng; accepting mô tả thái độ cởi mở. Câu 113: financially profitable = có lãi về tài chính sau khi giảm chi phí. Câu 121: former = cựu/nguyên; former director là cụm đồng vị của Ms. Yamada. Câu 127: Tân ngữ đếm được số ít cần từ hạn định; auditions số nhiều không cần a/an.",
    "pattern": "adj + noun | linking verb + adj | adv + adj/verb | be available online | a + adjective + singular count noun | contact a technician; need repairs | nearly + verb; cause somebody to V | will probably + V; take place | rate + object + as + adjective | adverb + adjective + noun | former + position | hold auditions / hold an audition",
    "signals": [
      "mạo từ",
      "danh từ phía sau",
      "linking verb",
      "hậu tố"
    ],
    "trap": "Đúng từ loại chưa đủ; operator và operation đều là danh từ nhưng khác vai trò. intended thường cần to V/for; comparable nói khả năng so sánh. reviewer chỉ người; reviews không đi với a. replacement/renewal/structure không chỉ chuyên viên sửa chữa. near cũng có thể là trạng từ nhưng không thay nearly mang nghĩa almost; lựa chọn C thực tế là approaches. regularly chỉ lặp lại; originally chỉ ban đầu. Sau as không luôn là danh từ; phải xét cấu trúc cả cụm. profit/profitability là danh từ; profitable là tính từ. former không phải một dạng của formalize; không học chung thành một họ. Không chọn số nhiều chỉ vì thường gặp hơn: audition thiếu an mới là lỗi quyết định.",
    "example": "The refrigerator has a surprisingly compact exterior. materials are available online (Bài luyện 30/10/2026, 102). A full-scale review will be conducted. (Bài luyện 30/10/2026, 103). contact a technician if machines need repairs (Bài luyện 30/10/2026, 106). Traffic nearly caused her to miss her flight. (Bài luyện 30/10/2026, 107). The merger will probably take place next year. (Bài luyện 30/10/2026, 108). rated the app as acceptable (Bài luyện 30/10/2026, 111). a financially profitable quarter (Bài luyện 30/10/2026, 113). Ms. Yamada, former director, was appointed ... (Bài luyện 30/10/2026, 121). The theater is holding auditions for its spring production. (Bài luyện 30/10/2026, 127)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Họ từ",
    "source": "Collection 1 · Test 1, câu 114; Test 2, câu 124; Parroto 2026, câu 112; part5_practise/part5_practice_2026-10-30.md, câu 114; part5_practise/part5_practice_2026-10-30.md, câu 123",
    "definition": "Học các dạng thông dụng cạnh nhau để phân biệt người, vật, quá trình, đặc tính và cách thức. Câu 114: supplier = nhà cung cấp; supply = nguồn cung/việc cung cấp; supplies = vật tư. Câu 123: promote = quảng bá hoạt động/sự kiện bằng bản tin.",
    "pattern": "operate → operation/operator/operational | surprise → surprised/surprising/surprisingly | supply / supplier / supplies | promote + activity/event",
    "signals": [
      "-tion/-ment",
      "-or/-er",
      "-al/-ive",
      "-ly"
    ],
    "trap": "Không tự tạo dạng từ chỉ dựa vào hậu tố. Danh từ chỉ tổ chức khác danh từ chỉ hàng hóa hay hành động. Cùng promote ở câu 104 nhưng khác nghĩa thăng chức.",
    "example": "The operator confirmed that the system was fully operational. chosen as the supplier of holiday cards (Bài luyện 30/10/2026, 114). promote activities through a monthly newsletter (Bài luyện 30/10/2026, 123)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Đại từ và từ hạn định",
    "source": "Collection 1 · Test 1, câu 102, 117, 119, 128; part5_practise/part5_practice_2026-10-30.md, câu 101; part5_practise/part5_practice_2026-10-30.md, câu 109",
    "definition": "Đại từ phải đúng chức năng chủ ngữ, tân ngữ hoặc sở hữu; từ hạn định đứng trước danh từ và cho biết số lượng/phạm vi. Câu 101: Trước youth cần tính từ sở hữu her; hers đứng độc lập. Câu 109: various = nhiều loại khác nhau; monthly basis = theo tháng.",
    "pattern": "they/them/their/theirs | any + plural/uncountable noun | those + V-ing | her + noun | various + plural noun",
    "signals": [
      "sau giới từ",
      "trước danh từ",
      "đứng độc lập"
    ],
    "trap": "Tính từ sở hữu phải có danh từ theo sau; đại từ sở hữu thì không. she là chủ ngữ; herself là phản thân. among/throughout không làm từ hạn định ở vị trí này.",
    "example": "The course is recommended for those seeking new skills. Despite her youth (Bài luyện 30/10/2026, 101). various beautiful guest rooms (Bài luyện 30/10/2026, 109)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Giới từ và liên từ",
    "source": "Collection 1 · Test 1–2; Parroto 2026; part5_practise/part5_practice_2026-10-30.md, câu 110; part5_practise/part5_practice_2026-10-30.md, câu 119; part5_practise/part5_practice_2026-10-30.md, câu 122",
    "definition": "Giới từ nhận danh từ/cụm danh từ/V-ing; liên từ phụ thuộc nhận mệnh đề có chủ ngữ và động từ. Câu 110: at Gordon Avenue and Hutch Street được hiểu là tại giao lộ hai phố. Câu 119: in response to = để đáp lại/phản ứng trước. Câu 122: up to = tối đa, không vượt quá; simultaneously = đồng thời.",
    "pattern": "preposition + noun/V-ing | conjunction + S + V | at + intersection/location | in response to + noun/V-ing | up to + number",
    "signals": [
      "because/because of",
      "although/despite",
      "in/on/at"
    ],
    "trap": "Hai từ gần nghĩa có thể yêu cầu thành phần theo sau khác nhau. Cách diễn đạt đầy đủ: at the intersection of A and B. in effect = có hiệu lực/trên thực tế, không thay in response to. far from không diễn tả giới hạn tối đa; as for chuyển chủ đề.",
    "example": "The elevators are closed because the crew must replace the cables. located at Gordon Avenue and Hutch Street (Bài luyện 30/10/2026, 110). an action plan in response to budget cuts (Bài luyện 30/10/2026, 119). open up to five files simultaneously (Bài luyện 30/10/2026, 122)."
  },
  {
    "sectionId": "clauses",
    "title": "Mệnh đề quan hệ",
    "source": "Collection 1 · Test 1, câu 106–107; Parroto 2026, câu 101; part5_practise/part5_practice_2026-10-30.md, câu 115; part5_practise/part5_practice_2026-10-30.md, câu 116",
    "definition": "Who/whom/whose dùng cho người; which cho vật/sự việc; that có thể thay who/which trong mệnh đề xác định. Giới từ có thể đứng trước which/whom. Câu 115: organization là tổ chức; that tracks bổ nghĩa organization số ít. Câu 116: who làm chủ ngữ attended của mệnh đề quan hệ.",
    "pattern": "noun + relative pronoun + clause | preposition + which/whom | organization + that + singular verb | person + who + verb",
    "signals": [
      "danh từ đứng trước",
      "chỗ trống trong mệnh đề sau"
    ],
    "trap": "Whom không làm chủ ngữ; mệnh đề không xác định sau dấu phẩy không dùng that. official ở đây chỉ cá nhân; leadership không định danh viện nghiên cứu. they không nối mệnh đề; when không làm chủ ngữ cho attended.",
    "example": "The lecture ended, after which attendees asked questions. the only organization that tracks deer populations (Bài luyện 30/10/2026, 115). committee members who attended the meeting (Bài luyện 30/10/2026, 116)."
  },
  {
    "sectionId": "clauses",
    "title": "Mệnh đề trạng ngữ và cấu trúc tương phản",
    "source": "Collection 1 · Test 2, câu 106, 122, 126–127; Parroto 2026, câu 118, 121, 128; part5_practise/part5_practice_2026-10-30.md, câu 124; part5_practise/part5_practice_2026-10-30.md, câu 125; part5_practise/part5_practice_2026-10-30.md, câu 128",
    "definition": "Because/although/if/when/so that nhận mệnh đề; because of/despite nhận cụm danh từ hoặc V-ing; rather than nối các thành phần song song. Câu 124: while có nghĩa mặc dù khi nối hai ý tương phản. Câu 125: despite đi với cụm danh từ chỉ trở ngại. Câu 128: Cấu trúc chỉ mức độ dẫn đến kết quả; hastily = vội vàng.",
    "pattern": "although + clause | despite + noun/V-ing | so that + clause | A rather than B | while + S + V | despite + noun/V-ing | so + adjective/adverb + that + clause",
    "signals": [
      "nguyên nhân",
      "tương phản",
      "mục đích",
      "lựa chọn"
    ],
    "trap": "Phải kiểm tra cả quan hệ logic lẫn loại thành phần theo sau. unless nêu điều kiện; without nhận noun/V-ing. aside cần from ở cụm aside from; không dùng despite + mệnh đề trực tiếp. briefly chỉ thời lượng ngắn; hastily giải thích việc bỏ sót đồ.",
    "example": "The director approved it so that the project could move forward. While the hotel has no restaurant, dining options are nearby. (Bài luyện 30/10/2026, 124). Despite a slight decline in revenue, expansion continues. (Bài luyện 30/10/2026, 125). He packed so hastily that he forgot his suit. (Bài luyện 30/10/2026, 128)."
  }
];
  updates.forEach(({ sectionId, ...lesson }) => {
    const section = window.part5Data.theory.find(item => item.id === sectionId);
    Object.assign(section.lessons.find(item => item.title === lesson.title), lesson);
  });
})();
