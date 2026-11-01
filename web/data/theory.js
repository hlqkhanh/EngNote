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

// Bổ sung nguồn: part5_practise/part5_parroto_toiec2026_test3.md
(() => {
  const updates = [
  {
    "sectionId": "tenses",
    "title": "Nhóm thì hiện tại",
    "source": "Collection 1 · Test 1, câu 108–109; Parroto 2026, câu 109–110; part5_practise/part5_parroto_toiec2026_test3.md, câu 112; part5_practise/part5_parroto_toiec2026_test3.md, câu 126",
    "definition": "Hiện tại đơn diễn tả thói quen, sự thật và lịch trình; hiện tại tiếp diễn diễn tả việc đang xảy ra hoặc kế hoạch gần; hiện tại hoàn thành nối quá khứ với hiện tại; hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình kéo dài. Câu 112: Hiện tại tiếp diễn diễn tả sắp xếp tương lai đã lên kế hoạch. Câu 126: over the past ten years chỉ khoảng kéo dài tới hiện tại; undergo changes = trải qua thay đổi.",
    "pattern": "S + V(s/es) | am/is/are + V-ing | have/has + V3 | have/has been + V-ing | am/is/are + V-ing + future time | have/has + V3 + over the past + duration",
    "signals": [
      "every/usually",
      "now/currently",
      "since/for",
      "so far/recently"
    ],
    "trap": "Có mốc tương lai không đồng nghĩa luôn dùng will; lịch trình cố định có thể dùng hiện tại đơn. next weekend không bắt buộc dùng will; represent thiếu -s với chủ ngữ số ít. since nhận mốc bắt đầu, không nhận the past ten years.",
    "example": "The permit expires at midnight tonight. Dr. Cheung is representing the hospital next weekend. (Parroto TOEIC 2026 · Test 3, 112). has undergone changes over the past ten years (Parroto TOEIC 2026 · Test 3, 126)."
  },
  {
    "sectionId": "tenses",
    "title": "Nhóm thì quá khứ",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_parroto_toiec2026_test3.md, câu 129",
    "definition": "Quá khứ đơn kể sự việc đã kết thúc; quá khứ tiếp diễn nêu hành động đang diễn ra tại một thời điểm; quá khứ hoàn thành chỉ việc xảy ra trước một mốc quá khứ; dạng hoàn thành tiếp diễn nhấn mạnh khoảng kéo dài trước mốc đó. Câu 129: Quá khứ hoàn thành nhấn mạnh việc sửa lịch xảy ra trước khi khóa học bắt đầu.",
    "pattern": "S + V2/ed | was/were + V-ing | had + V3 | had been + V-ing | had + V3 ... before + past event",
    "signals": [
      "yesterday/ago/last",
      "at that time",
      "by the time",
      "before + past event"
    ],
    "trap": "Hai hành động quá khứ không bắt buộc đều dùng quá khứ hoàn thành; chỉ hành động xảy ra trước mới dùng had + V3. Không phải mọi câu có before đều bắt buộc quá khứ hoàn thành; trong các lựa chọn, C phù hợp trình tự và thể chủ động.",
    "example": "The crew had finished the repair before the office reopened. Long before training began, she had revised the schedule. (Parroto TOEIC 2026 · Test 3, 129)."
  },
  {
    "sectionId": "tenses",
    "title": "Nhóm thì tương lai",
    "source": "Collection 1 · Test 2, câu 108, 123; part5_practise/part5_parroto_toiec2026_test3.md, câu 130",
    "definition": "Will + V dùng cho dự đoán hoặc quyết định; be going to cho kế hoạch/dấu hiệu rõ; tương lai tiếp diễn cho việc đang diễn ra; tương lai hoàn thành cho việc hoàn tất trước một mốc tương lai. Câu 130: Mệnh đề thời gian tương lai dùng hiện tại đơn hoặc hiện tại hoàn thành để nhấn mạnh hoàn tất.",
    "pattern": "will + V | be going to + V | will be + V-ing | will have + V3 | will + V + once + S + have/has V3",
    "signals": [
      "tomorrow/next",
      "this time next",
      "by + mốc tương lai"
    ],
    "trap": "Sau when, once, as soon as, before, after và until, mệnh đề thời gian thường dùng hiện tại đơn dù nói về tương lai. once không luôn có nghĩa ngay lập tức; nghĩa cốt lõi ở đây là sau khi/một khi điều kiện thời gian hoàn tất.",
    "example": "As soon as the shipment arrives, we will inspect it. He will return once the interns have arrived. (Parroto TOEIC 2026 · Test 3, 130)."
  },
  {
    "sectionId": "comparisons",
    "title": "So sánh bằng và hơn",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_parroto_toiec2026_test3.md, câu 105",
    "definition": "So sánh bằng dùng as ... as; so sánh hơn dùng -er hoặc more, thường đi với than. Câu 105: Sau are more cần tính từ productive; those thay employees.",
    "pattern": "as + adj/adv + as | adj-er/more + adj + than | be more + adjective + than",
    "signals": [
      "as ... as",
      "than",
      "much/far/even"
    ],
    "trap": "Không dùng đồng thời more và hậu tố -er. production = sản xuất; productivity = năng suất; productively là trạng từ.",
    "example": "The new process is more efficient than the old one. more productive than those who take no breaks (Parroto TOEIC 2026 · Test 3, 105)."
  },
  {
    "sectionId": "passive",
    "title": "Cấu trúc cốt lõi",
    "source": "Collection 1 · Test 2, câu 108, 117, 122; part5_practise/part5_parroto_toiec2026_test3.md, câu 117",
    "definition": "Dùng be + V3/ed khi chủ ngữ nhận hành động. Be phải được chia theo thì và chủ ngữ. Câu 117: specifically bổ nghĩa hành động thiết kế trong cấu trúc bị động be designed.",
    "pattern": "S + be + V3/ed (+ by + agent) | be specifically designed to V",
    "signals": [
      "chủ ngữ không tự thực hiện",
      "by + tác nhân"
    ],
    "trap": "Không chọn bị động chỉ vì thấy be + V3 đúng hình thức; phải kiểm tra vai trò nghĩa của chủ ngữ. Không cần quy designed thành tính từ mới giải được vị trí trạng từ.",
    "example": "The guidelines had been clearly explained. The app is specifically designed to provide insights. (Parroto TOEIC 2026 · Test 3, 117)."
  },
  {
    "sectionId": "passive",
    "title": "Bị động theo thì",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_parroto_toiec2026_test3.md, câu 104; part5_practise/part5_parroto_toiec2026_test3.md, câu 120",
    "definition": "Giữ dấu hiệu của thì trên động từ be: is processed, was processed, has been processed, will be processed. Câu 104: Bị động hiện tại hoàn thành: được thăng chức. Câu 120: consistently = nhất quán/qua nhiều lần; bị động hiện tại hoàn thành.",
    "pattern": "tense of be + V3 | have/has been promoted to + position | have/has + adverb + been shown to V",
    "signals": [
      "every day",
      "yesterday",
      "since",
      "next week"
    ],
    "trap": "Không bỏ been trong bị động của thì hoàn thành. Phân biệt promote sản phẩm (quảng bá) với promote nhân viên (thăng chức). Không suy ra hiệu quả xảy ra liên tục mọi lúc; đó là kết quả được ghi nhận nhất quán.",
    "example": "The refund will be processed within five business days. has been promoted to president (Parroto TOEIC 2026 · Test 3, 104). have consistently been shown to improve skills (Parroto TOEIC 2026 · Test 3, 120)."
  },
  {
    "sectionId": "agreement",
    "title": "Chủ ngữ số ít và số nhiều",
    "source": "Collection 1 · Test 1, câu 109; Parroto 2026, câu 109–110; part5_practise/part5_parroto_toiec2026_test3.md, câu 118",
    "definition": "Ở hiện tại đơn, chủ ngữ ngôi thứ ba số ít dùng V-s/es; chủ ngữ số nhiều dùng động từ nguyên mẫu. Câu 118: people số nhiều đi với struggle; suggest that ở đây tường thuật kết quả nghiên cứu.",
    "pattern": "singular S + V-s/es | plural S + V | plural people + struggle",
    "signals": [
      "company/manager",
      "employees/registers"
    ],
    "trap": "Tên công ty là chủ ngữ số ít. Không phải suggest đề nghị dùng giả định; struggling/to struggle không tự làm vị ngữ.",
    "example": "The manager posts a daily report. More people struggle with night driving. (Parroto TOEIC 2026 · Test 3, 118)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Danh từ, động từ, tính từ và trạng từ",
    "source": "Collection 1 · Test 1, câu 104, 114; Test 2, câu 124; Parroto 2026, câu 112; part5_practise/part5_parroto_toiec2026_test3.md, câu 102; part5_practise/part5_parroto_toiec2026_test3.md, câu 103; part5_practise/part5_parroto_toiec2026_test3.md, câu 106; part5_practise/part5_parroto_toiec2026_test3.md, câu 107; part5_practise/part5_parroto_toiec2026_test3.md, câu 108; part5_practise/part5_parroto_toiec2026_test3.md, câu 111; part5_practise/part5_parroto_toiec2026_test3.md, câu 113; part5_practise/part5_parroto_toiec2026_test3.md, câu 121; part5_practise/part5_parroto_toiec2026_test3.md, câu 127",
    "definition": "Xác định từ loại bằng vị trí rồi kiểm tra nghĩa: danh từ làm chủ/tân ngữ; động từ làm vị ngữ; tính từ bổ nghĩa danh từ hoặc sau linking verb; trạng từ bổ nghĩa động từ, tính từ hay cả câu. Câu 102: available = có sẵn/có thể truy cập. Câu 103: conduct a review = tiến hành đánh giá; a yêu cầu danh từ đếm được số ít. Câu 106: Chọn danh từ chỉ người sửa máy, không phải sự thay thế hay gia hạn. Câu 107: nearly = suýt/gần như; near = gần về vị trí/thời gian. Câu 108: probably diễn tả xác suất; merger = sự sáp nhập. Câu 111: acceptable mô tả chất lượng; accepting mô tả thái độ cởi mở. Câu 113: financially profitable = có lãi về tài chính sau khi giảm chi phí. Câu 121: former = cựu/nguyên; former director là cụm đồng vị của Ms. Yamada. Câu 127: Tân ngữ đếm được số ít cần từ hạn định; auditions số nhiều không cần a/an.",
    "pattern": "adj + noun | linking verb + adj | adv + adj/verb | be available online | a + adjective + singular count noun | contact a technician; need repairs | nearly + verb; cause somebody to V | will probably + V; take place | rate + object + as + adjective | adverb + adjective + noun | former + position | hold auditions / hold an audition",
    "signals": [
      "mạo từ",
      "danh từ phía sau",
      "linking verb",
      "hậu tố"
    ],
    "trap": "Đúng từ loại chưa đủ; operator và operation đều là danh từ nhưng khác vai trò. intended thường cần to V/for; comparable nói khả năng so sánh. reviewer chỉ người; reviews không đi với a. replacement/renewal/structure không chỉ chuyên viên sửa chữa. near cũng có thể là trạng từ nhưng không thay nearly mang nghĩa almost; lựa chọn C thực tế là approaches. regularly chỉ lặp lại; originally chỉ ban đầu. Sau as không luôn là danh từ; phải xét cấu trúc cả cụm. profit/profitability là danh từ; profitable là tính từ. former không phải một dạng của formalize; không học chung thành một họ. Không chọn số nhiều chỉ vì thường gặp hơn: audition thiếu an mới là lỗi quyết định.",
    "example": "The refrigerator has a surprisingly compact exterior. materials are available online (Parroto TOEIC 2026 · Test 3, 102). A full-scale review will be conducted. (Parroto TOEIC 2026 · Test 3, 103). contact a technician if machines need repairs (Parroto TOEIC 2026 · Test 3, 106). Traffic nearly caused her to miss her flight. (Parroto TOEIC 2026 · Test 3, 107). The merger will probably take place next year. (Parroto TOEIC 2026 · Test 3, 108). rated the app as acceptable (Parroto TOEIC 2026 · Test 3, 111). a financially profitable quarter (Parroto TOEIC 2026 · Test 3, 113). Ms. Yamada, former director, was appointed ... (Parroto TOEIC 2026 · Test 3, 121). The theater is holding auditions for its spring production. (Parroto TOEIC 2026 · Test 3, 127)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Họ từ",
    "source": "Collection 1 · Test 1, câu 114; Test 2, câu 124; Parroto 2026, câu 112; part5_practise/part5_parroto_toiec2026_test3.md, câu 114; part5_practise/part5_parroto_toiec2026_test3.md, câu 123",
    "definition": "Học các dạng thông dụng cạnh nhau để phân biệt người, vật, quá trình, đặc tính và cách thức. Câu 114: supplier = nhà cung cấp; supply = nguồn cung/việc cung cấp; supplies = vật tư. Câu 123: promote = quảng bá hoạt động/sự kiện bằng bản tin.",
    "pattern": "operate → operation/operator/operational | surprise → surprised/surprising/surprisingly | supply / supplier / supplies | promote + activity/event",
    "signals": [
      "-tion/-ment",
      "-or/-er",
      "-al/-ive",
      "-ly"
    ],
    "trap": "Không tự tạo dạng từ chỉ dựa vào hậu tố. Danh từ chỉ tổ chức khác danh từ chỉ hàng hóa hay hành động. Cùng promote ở câu 104 nhưng khác nghĩa thăng chức.",
    "example": "The operator confirmed that the system was fully operational. chosen as the supplier of holiday cards (Parroto TOEIC 2026 · Test 3, 114). promote activities through a monthly newsletter (Parroto TOEIC 2026 · Test 3, 123)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Đại từ và từ hạn định",
    "source": "Collection 1 · Test 1, câu 102, 117, 119, 128; part5_practise/part5_parroto_toiec2026_test3.md, câu 101; part5_practise/part5_parroto_toiec2026_test3.md, câu 109",
    "definition": "Đại từ phải đúng chức năng chủ ngữ, tân ngữ hoặc sở hữu; từ hạn định đứng trước danh từ và cho biết số lượng/phạm vi. Câu 101: Trước youth cần tính từ sở hữu her; hers đứng độc lập. Câu 109: various = nhiều loại khác nhau; monthly basis = theo tháng.",
    "pattern": "they/them/their/theirs | any + plural/uncountable noun | those + V-ing | her + noun | various + plural noun",
    "signals": [
      "sau giới từ",
      "trước danh từ",
      "đứng độc lập"
    ],
    "trap": "Tính từ sở hữu phải có danh từ theo sau; đại từ sở hữu thì không. she là chủ ngữ; herself là phản thân. among/throughout không làm từ hạn định ở vị trí này.",
    "example": "The course is recommended for those seeking new skills. Despite her youth (Parroto TOEIC 2026 · Test 3, 101). various beautiful guest rooms (Parroto TOEIC 2026 · Test 3, 109)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Giới từ và liên từ",
    "source": "Collection 1 · Test 1–2; Parroto 2026; part5_practise/part5_parroto_toiec2026_test3.md, câu 110; part5_practise/part5_parroto_toiec2026_test3.md, câu 119; part5_practise/part5_parroto_toiec2026_test3.md, câu 122",
    "definition": "Giới từ nhận danh từ/cụm danh từ/V-ing; liên từ phụ thuộc nhận mệnh đề có chủ ngữ và động từ. Câu 110: at Gordon Avenue and Hutch Street được hiểu là tại giao lộ hai phố. Câu 119: in response to = để đáp lại/phản ứng trước. Câu 122: up to = tối đa, không vượt quá; simultaneously = đồng thời.",
    "pattern": "preposition + noun/V-ing | conjunction + S + V | at + intersection/location | in response to + noun/V-ing | up to + number",
    "signals": [
      "because/because of",
      "although/despite",
      "in/on/at"
    ],
    "trap": "Hai từ gần nghĩa có thể yêu cầu thành phần theo sau khác nhau. Cách diễn đạt đầy đủ: at the intersection of A and B. in effect = có hiệu lực/trên thực tế, không thay in response to. far from không diễn tả giới hạn tối đa; as for chuyển chủ đề.",
    "example": "The elevators are closed because the crew must replace the cables. located at Gordon Avenue and Hutch Street (Parroto TOEIC 2026 · Test 3, 110). an action plan in response to budget cuts (Parroto TOEIC 2026 · Test 3, 119). open up to five files simultaneously (Parroto TOEIC 2026 · Test 3, 122)."
  },
  {
    "sectionId": "clauses",
    "title": "Mệnh đề quan hệ",
    "source": "Collection 1 · Test 1, câu 106–107; Parroto 2026, câu 101; part5_practise/part5_parroto_toiec2026_test3.md, câu 115; part5_practise/part5_parroto_toiec2026_test3.md, câu 116",
    "definition": "Who/whom/whose dùng cho người; which cho vật/sự việc; that có thể thay who/which trong mệnh đề xác định. Giới từ có thể đứng trước which/whom. Câu 115: organization là tổ chức; that tracks bổ nghĩa organization số ít. Câu 116: who làm chủ ngữ attended của mệnh đề quan hệ.",
    "pattern": "noun + relative pronoun + clause | preposition + which/whom | organization + that + singular verb | person + who + verb",
    "signals": [
      "danh từ đứng trước",
      "chỗ trống trong mệnh đề sau"
    ],
    "trap": "Whom không làm chủ ngữ; mệnh đề không xác định sau dấu phẩy không dùng that. official ở đây chỉ cá nhân; leadership không định danh viện nghiên cứu. they không nối mệnh đề; when không làm chủ ngữ cho attended.",
    "example": "The lecture ended, after which attendees asked questions. the only organization that tracks deer populations (Parroto TOEIC 2026 · Test 3, 115). committee members who attended the meeting (Parroto TOEIC 2026 · Test 3, 116)."
  },
  {
    "sectionId": "clauses",
    "title": "Mệnh đề trạng ngữ và cấu trúc tương phản",
    "source": "Collection 1 · Test 2, câu 106, 122, 126–127; Parroto 2026, câu 118, 121, 128; part5_practise/part5_parroto_toiec2026_test3.md, câu 124; part5_practise/part5_parroto_toiec2026_test3.md, câu 125; part5_practise/part5_parroto_toiec2026_test3.md, câu 128",
    "definition": "Because/although/if/when/so that nhận mệnh đề; because of/despite nhận cụm danh từ hoặc V-ing; rather than nối các thành phần song song. Câu 124: while có nghĩa mặc dù khi nối hai ý tương phản. Câu 125: despite đi với cụm danh từ chỉ trở ngại. Câu 128: Cấu trúc chỉ mức độ dẫn đến kết quả; hastily = vội vàng.",
    "pattern": "although + clause | despite + noun/V-ing | so that + clause | A rather than B | while + S + V | despite + noun/V-ing | so + adjective/adverb + that + clause",
    "signals": [
      "nguyên nhân",
      "tương phản",
      "mục đích",
      "lựa chọn"
    ],
    "trap": "Phải kiểm tra cả quan hệ logic lẫn loại thành phần theo sau. unless nêu điều kiện; without nhận noun/V-ing. aside cần from ở cụm aside from; không dùng despite + mệnh đề trực tiếp. briefly chỉ thời lượng ngắn; hastily giải thích việc bỏ sót đồ.",
    "example": "The director approved it so that the project could move forward. While the hotel has no restaurant, dining options are nearby. (Parroto TOEIC 2026 · Test 3, 124). Despite a slight decline in revenue, expansion continues. (Parroto TOEIC 2026 · Test 3, 125). He packed so hastily that he forgot his suit. (Parroto TOEIC 2026 · Test 3, 128)."
  }
];
  updates.forEach(({ sectionId, ...lesson }) => {
    const section = window.part5Data.theory.find(item => item.id === sectionId);
    Object.assign(section.lessons.find(item => item.title === lesson.title), lesson);
  });
})();

(() => { const updates = [
  {
    "sectionId": "parts-of-speech",
    "title": "Danh từ, động từ, tính từ và trạng từ",
    "source": "Collection 1 · Test 1, câu 104, 114; Test 2, câu 124; Parroto 2026, câu 112; part5_practise/part5_parroto_toiec2026_test3.md, câu 102; part5_practise/part5_parroto_toiec2026_test3.md, câu 103; part5_practise/part5_parroto_toiec2026_test3.md, câu 106; part5_practise/part5_parroto_toiec2026_test3.md, câu 107; part5_practise/part5_parroto_toiec2026_test3.md, câu 108; part5_practise/part5_parroto_toiec2026_test3.md, câu 111; part5_practise/part5_parroto_toiec2026_test3.md, câu 113; part5_practise/part5_parroto_toiec2026_test3.md, câu 121; part5_practise/part5_parroto_toiec2026_test3.md, câu 127; part5_practise/part5_Collection1_Test3.md, câu 101; part5_practise/part5_Collection1_Test3.md, câu 105; part5_practise/part5_Collection1_Test3.md, câu 108; part5_practise/part5_Collection1_Test3.md, câu 109; part5_practise/part5_Collection1_Test3.md, câu 110; part5_practise/part5_Collection1_Test3.md, câu 112; part5_practise/part5_Collection1_Test3.md, câu 113; part5_practise/part5_Collection1_Test3.md, câu 116; part5_practise/part5_Collection1_Test3.md, câu 119; part5_practise/part5_Collection1_Test3.md, câu 125; part5_practise/part5_Collection1_Test3.md, câu 126; part5_practise/part5_Collection1_Test3.md, câu 127; part5_practise/part5_Collection1_Test3.md, câu 130",
    "definition": "Xác định từ loại bằng vị trí rồi kiểm tra nghĩa: danh từ làm chủ/tân ngữ; động từ làm vị ngữ; tính từ bổ nghĩa danh từ hoặc sau linking verb; trạng từ bổ nghĩa động từ, tính từ hay cả câu. Câu 102: available = có sẵn/có thể truy cập. Câu 103: conduct a review = tiến hành đánh giá; a yêu cầu danh từ đếm được số ít. Câu 106: Chọn danh từ chỉ người sửa máy, không phải sự thay thế hay gia hạn. Câu 107: nearly = suýt/gần như; near = gần về vị trí/thời gian. Câu 108: probably diễn tả xác suất; merger = sự sáp nhập. Câu 111: acceptable mô tả chất lượng; accepting mô tả thái độ cởi mở. Câu 113: financially profitable = có lãi về tài chính sau khi giảm chi phí. Câu 121: former = cựu/nguyên; former director là cụm đồng vị của Ms. Yamada. Câu 127: Tân ngữ đếm được số ít cần từ hạn định; auditions số nhiều không cần a/an. Sau feel dùng tính từ; phản hồi encouraging dẫn tới confident about prospects. consistently bổ nghĩa profitable, profitable mô tả location; superlative most profitable. automatically = tự động; scanned ticket kích hoạt thanh chắn. timely là tính từ nghĩa kịp thời; in a timely manner = một cách kịp thời. precisely diễn tả độ chính xác của sự trùng khớp. a wide range of rental vehicles = nhiều loại xe cho thuê. experience là danh từ không đếm được khi nói kinh nghiệm; hai tân ngữ song song. durable = bền, chịu mài mòn; foot traffic = lượng người đi bộ qua lại. obstacles = trở ngại gây trì hoãn; document obstacles = ghi nhận trở ngại. Unfortunately là trạng từ đánh giá toàn câu; owing to chỉ nguyên nhân. considerable = đáng kể về mức độ; a considerable increase in enrollments. confidence không đếm được khi chỉ sự tin tưởng; làm tân ngữ expressed. reliability = độ tin cậy; reliability of the delivery schedule.",
    "pattern": "adj + noun | linking verb + adj | adv + adj/verb | be available online | a + adjective + singular count noun | contact a technician; need repairs | nearly + verb; cause somebody to V | will probably + V; take place | rate + object + as + adjective | adverb + adjective + noun | former + position | hold auditions / hold an audition | feel + adjective; confident about | most + adverb + adjective + noun | rise automatically; as soon as + clause | in a timely manner | match something precisely | a wide range of + plural noun | possess N and N; experience (in) V-ing | durable surface; constant foot traffic | obstacles delay a launch | Unfortunately, + clause; owing to + noun | a considerable increase in + noun | express confidence in + noun/V-ing | the + noun + of",
    "signals": [
      "mạo từ",
      "danh từ phía sau",
      "linking verb",
      "hậu tố"
    ],
    "trap": "Đúng từ loại chưa đủ; operator và operation đều là danh từ nhưng khác vai trò. intended thường cần to V/for; comparable nói khả năng so sánh. reviewer chỉ người; reviews không đi với a. replacement/renewal/structure không chỉ chuyên viên sửa chữa. near cũng có thể là trạng từ nhưng không thay nearly mang nghĩa almost; lựa chọn C thực tế là approaches. regularly chỉ lặp lại; originally chỉ ban đầu. Sau as không luôn là danh từ; phải xét cấu trúc cả cụm. profit/profitability là danh từ; profitable là tính từ. former không phải một dạng của formalize; không học chung thành một họ. Không chọn số nhiều chỉ vì thường gặp hơn: audition thiếu an mới là lỗi quyết định. concerned/doubtful trái ngữ cảnh; eligible for = đủ điều kiện. Danh từ có thể bổ nghĩa danh từ, nhưng profit/profitability không phù hợp cấu trúc có most consistently. manually trái cơ chế tự động; eventually không nhấn mạnh phản ứng ngay khi quét. Không phải từ nào kết thúc -ly cũng là trạng từ; current/gradual/momentary không mang nghĩa đúng hạn. frequently/occasionally chỉ tần suất, recently chỉ thời gian; không diễn tả độ khớp. amount thường đi với danh từ không đếm được; portion nhấn phần của tổng thể. V-ing có thể làm danh từ nhưng experiencing working không diễn tả sở hữu kinh nghiệm ở đây. decorative trang trí, reflective phản chiếu, adjustable điều chỉnh được. forecasts dự báo, estimates ước tính, outcomes kết quả; không phù hợp nghĩa nguyên nhân cản trở. considerably/enormously/severely chỉ mức độ, cần thành phần thích hợp để bổ nghĩa. prolonged kéo dài thời gian; durable bền; plenty không làm tính từ trực tiếp ở đây, học plenty of + noun. confidences là những điều tâm sự bí mật, không mang nghĩa sự tự tin trong câu. reliable tính từ, reliably trạng từ, relies động từ; rely on = dựa vào.",
    "example": "The refrigerator has a surprisingly compact exterior. materials are available online (Parroto TOEIC 2026 · Test 3, 102). A full-scale review will be conducted. (Parroto TOEIC 2026 · Test 3, 103). contact a technician if machines need repairs (Parroto TOEIC 2026 · Test 3, 106). Traffic nearly caused her to miss her flight. (Parroto TOEIC 2026 · Test 3, 107). The merger will probably take place next year. (Parroto TOEIC 2026 · Test 3, 108). rated the app as acceptable (Parroto TOEIC 2026 · Test 3, 111). a financially profitable quarter (Parroto TOEIC 2026 · Test 3, 113). Ms. Yamada, former director, was appointed ... (Parroto TOEIC 2026 · Test 3, 121). The theater is holding auditions for its spring production. (Parroto TOEIC 2026 · Test 3, 127). After reviewing a series of encouraging reader responses, the senior editor felt genuinely confident about the novel's commercial prospects. (part5_practise/part5_Collection1_Test3.md, câu 101). Since opening in the central shopping district, the Elmcrest branch has remained the chain's most consistently profitable location to date. (part5_practise/part5_Collection1_Test3.md, câu 105). The exit barrier rises automatically as soon as a valid parking ticket is scanned. (part5_practise/part5_Collection1_Test3.md, câu 108). Hartwell Insurance recommends submitting your claims in a timely manner. (part5_practise/part5_Collection1_Test3.md, câu 109). After inspecting the shipment, Delia Marsh confirmed that the delivered chairs matched the approved samples precisely. (part5_practise/part5_Collection1_Test3.md, câu 110). Travelers arriving at the terminal counter can select from a wide range of rental vehicles throughout the busy holiday season. (part5_practise/part5_Collection1_Test3.md, câu 112). Volunteers at the shelter should possess a patient temperament and experience working with rescued animals. (part5_practise/part5_Collection1_Test3.md, câu 113). Since the lobby floor would face constant foot traffic, Harriet Mullins chose a more durable surface for the main entrance. (part5_practise/part5_Collection1_Test3.md, câu 116). Project coordinator Miriam Solberg documented the obstacles that had delayed the campaign launch across several markets. (part5_practise/part5_Collection1_Test3.md, câu 119). Unfortunately , the order placed by Halston Textiles will be delayed until next week owing to a supplier shortage. (part5_practise/part5_Collection1_Test3.md, câu 125). The online learning platform recorded a considerable increase in enrollments last quarter after expanding its course catalog. (part5_practise/part5_Collection1_Test3.md, câu 126). Mr. Halloran has expressed confidence in overseeing the department's software migration. (part5_practise/part5_Collection1_Test3.md, câu 127). Before renewing the annual contract, the operations manager carefully assessed the reliability of the courier's delivery schedule. (part5_practise/part5_Collection1_Test3.md, câu 130)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Giới từ và liên từ",
    "source": "Collection 1 · Test 1–2; Parroto 2026; part5_practise/part5_parroto_toiec2026_test3.md, câu 110; part5_practise/part5_parroto_toiec2026_test3.md, câu 119; part5_practise/part5_parroto_toiec2026_test3.md, câu 122; part5_practise/part5_Collection1_Test3.md, câu 102; part5_practise/part5_Collection1_Test3.md, câu 104; part5_practise/part5_Collection1_Test3.md, câu 117; part5_practise/part5_Collection1_Test3.md, câu 122; part5_practise/part5_Collection1_Test3.md, câu 124",
    "definition": "Giới từ nhận danh từ/cụm danh từ/V-ing; liên từ phụ thuộc nhận mệnh đề có chủ ngữ và động từ. Câu 110: at Gordon Avenue and Hutch Street được hiểu là tại giao lộ hai phố. Câu 119: in response to = để đáp lại/phản ứng trước. Câu 122: up to = tối đa, không vượt quá; simultaneously = đồng thời. thanks to chỉ nguyên nhân dẫn tới kết quả, ở đây là kết quả tích cực. during their visit = trong thời gian chuyến thăm; while + S + V. eligible for the bonus = đủ điều kiện nhận thưởng. be divided into five chapters = được chia thành năm chương. by phone chỉ phương thức, không có the; over the phone có the.",
    "pattern": "preposition + noun/V-ing | conjunction + S + V | at + intersection/location | in response to + noun/V-ing | up to + number | thanks to + noun/V-ing | during + event/period | be eligible for + noun | divide something into parts | by phone / over the phone",
    "signals": [
      "because/because of",
      "although/despite",
      "in/on/at"
    ],
    "trap": "Hai từ gần nghĩa có thể yêu cầu thành phần theo sau khác nhau. Cách diễn đạt đầy đủ: at the intersection of A and B. in effect = có hiệu lực/trên thực tế, không thay in response to. far from không diễn tả giới hạn tối đa; as for chuyển chủ đề. even though cần mệnh đề; however là trạng từ nối, không phải liên từ phụ thuộc. during không tự khẳng định liên tục suốt toàn bộ; throughout nhấn mạnh toàn khoảng. available/suitable/ready không truyền đạt chính xác tư cách đủ điều kiện. divide among nói phân chia cho các bên; by có thể dùng trong phép chia nhưng không mang nghĩa chia thành chương. on phone thiếu the; with phone không phải cụm chỉ phương thức thanh toán trong câu.",
    "example": "The elevators are closed because the crew must replace the cables. located at Gordon Avenue and Hutch Street (Parroto TOEIC 2026 · Test 3, 110). an action plan in response to budget cuts (Parroto TOEIC 2026 · Test 3, 119). open up to five files simultaneously (Parroto TOEIC 2026 · Test 3, 122). The engineers confirm that the prototype was completed on schedule thanks to the design team's overtime effort. (part5_practise/part5_Collection1_Test3.md, câu 102). Visitors purchasing a day pass at Larchwood Recreation Center may access all facilities during their visit. (part5_practise/part5_Collection1_Test3.md, câu 104). Employees who have completed the safety course are now eligible for the annual bonus. (part5_practise/part5_Collection1_Test3.md, câu 117). The revised employee handbook is divided into five distinct chapters. (part5_practise/part5_Collection1_Test3.md, câu 122). To make settlement easier, the utility company now lets customers pay their monthly bills online or by phone. (part5_practise/part5_Collection1_Test3.md, câu 124)."
  },
  {
    "sectionId": "parts-of-speech",
    "title": "Đại từ và từ hạn định",
    "source": "Collection 1 · Test 1, câu 102, 117, 119, 128; part5_practise/part5_parroto_toiec2026_test3.md, câu 101; part5_practise/part5_parroto_toiec2026_test3.md, câu 109; part5_practise/part5_Collection1_Test3.md, câu 103; part5_practise/part5_Collection1_Test3.md, câu 111; part5_practise/part5_Collection1_Test3.md, câu 129",
    "definition": "Đại từ phải đúng chức năng chủ ngữ, tân ngữ hoặc sở hữu; từ hạn định đứng trước danh từ và cho biết số lượng/phạm vi. Câu 101: Trước youth cần tính từ sở hữu her; hers đứng độc lập. Câu 109: various = nhiều loại khác nhau; monthly basis = theo tháng. one thay danh từ đếm được số ít; ones thay danh từ số nhiều. each other = lẫn nhau, chỉ quan hệ qua lại; themselves = chính họ. his đứng trước expectations là từ hạn định sở hữu.",
    "pattern": "they/them/their/theirs | any + plural/uncountable noun | those + V-ing | her + noun | various + plural noun | the + superlative + one | each other vs themselves | his + noun",
    "signals": [
      "sau giới từ",
      "trước danh từ",
      "đứng độc lập"
    ],
    "trap": "Tính từ sở hữu phải có danh từ theo sau; đại từ sở hữu thì không. she là chủ ngữ; herself là phản thân. among/throughout không làm từ hạn định ở vị trí này. those là số nhiều; each/some không tạo the largest ... ở đây. each other không bị giới hạn tuyệt đối chỉ hai người; ở đây hai chủ cửa hàng là dấu hiệu rõ. he chủ ngữ, him tân ngữ, himself phản thân; không dùng làm từ hạn định trước noun.",
    "example": "The course is recommended for those seeking new skills. Despite her youth (Parroto TOEIC 2026 · Test 3, 101). various beautiful guest rooms (Parroto TOEIC 2026 · Test 3, 109). The Lakeside Suite is currently the largest one available in our downtown hotel. (part5_practise/part5_Collection1_Test3.md, câu 103). The two shop owners have agreed to refer customers to each other whenever their own inventory runs low. (part5_practise/part5_Collection1_Test3.md, câu 111). During staff orientation, department head Desmond Pryce will explain his expectations to every new team member. (part5_practise/part5_Collection1_Test3.md, câu 129)."
  },
  {
    "sectionId": "tenses",
    "title": "Nhóm thì tương lai",
    "source": "Collection 1 · Test 2, câu 108, 123; part5_practise/part5_parroto_toiec2026_test3.md, câu 130; part5_practise/part5_Collection1_Test3.md, câu 106",
    "definition": "Will + V dùng cho dự đoán hoặc quyết định; be going to cho kế hoạch/dấu hiệu rõ; tương lai tiếp diễn cho việc đang diễn ra; tương lai hoàn thành cho việc hoàn tất trước một mốc tương lai. Câu 130: Mệnh đề thời gian tương lai dùng hiện tại đơn hoặc hiện tại hoàn thành để nhấn mạnh hoàn tất. Tương lai tiếp diễn diễn tả việc sẽ diễn ra trong tuần tới: throughout the coming week.",
    "pattern": "will + V | be going to + V | will be + V-ing | will have + V3 | will + V + once + S + have/has V3 | will be + V-ing",
    "signals": [
      "tomorrow/next",
      "this time next",
      "by + mốc tương lai"
    ],
    "trap": "Sau when, once, as soon as, before, after và until, mệnh đề thời gian thường dùng hiện tại đơn dù nói về tương lai. once không luôn có nghĩa ngay lập tức; nghĩa cốt lõi ở đây là sau khi/một khi điều kiện thời gian hoàn tất. have reviewed là hiện tại hoàn thành chứ không phải quá khứ hoàn thành; have/were còn sai hòa hợp.",
    "example": "As soon as the shipment arrives, we will inspect it. He will return once the interns have arrived. (Parroto TOEIC 2026 · Test 3, 130). Ms. Bergstrom will be reviewing maintenance requests from residential tenants throughout the coming week. (part5_practise/part5_Collection1_Test3.md, câu 106)."
  },
  {
    "sectionId": "participles",
    "title": "Hiện tại phân từ và quá khứ phân từ",
    "source": "Collection 1 · Test 2, câu 103; part5_practise/part5_Collection1_Test3.md, câu 107; part5_practise/part5_Collection1_Test3.md, câu 114; part5_practise/part5_Collection1_Test3.md, câu 115; part5_practise/part5_Collection1_Test3.md, câu 123; part5_practise/part5_Collection1_Test3.md, câu 128",
    "definition": "V-ing mang nghĩa chủ động/đang diễn ra; V3/ed thường mang nghĩa bị động/đã hoàn tất. installed = đã được lắp; máy nhận hành động nên chọn V3. platform consolidating orders = platform that consolidates orders; has become là vị ngữ chính. Cơ sở thực hiện việc xử lý bưu kiện; processing rút gọn that processes. updated list = danh sách đã được cập nhật, danh sách nhận tác động. qualified là tính từ/phân từ chỉ đủ năng lực; best qualified = đủ năng lực nhất.",
    "pattern": "V-ing: active | V3/ed: passive/completed | recently + V3 + noun | noun + V-ing + object | facility processing parcels | updated + noun | the executive best qualified to V",
    "signals": [
      "chủ thể thực hiện",
      "chủ thể nhận tác động"
    ],
    "trap": "Chọn theo quan hệ nghĩa với danh từ, không chỉ theo vị trí. install là nguyên mẫu, installs là dạng chia; installing mang quan hệ chủ động không hợp máy. Đề chọn C. Tuy nhiên platform to consolidate orders cũng có cách hiểu mục đích/chức năng hợp ngữ pháp; B không sai tuyệt đối. processes/process không nối với danh từ khi thiếu that/which; processed sai quan hệ với parcels. Danh từ vẫn có thể bổ nghĩa danh từ ở cấu trúc khác; ở đây ý nghĩa trạng thái đã cập nhật quyết định D. qualifying thường nói tạo điều kiện/đủ điều kiện tham dự, ví dụ qualifying round; không thay qualified to lead.",
    "example": "Commenting on the results, Ms. Carraway assured the staff. The recently installed exercise machines will be demonstrated to members during the morning orientation at Fenwick Athletic Club. (part5_practise/part5_Collection1_Test3.md, câu 107). The platform consolidating all incoming orders into a single dashboard has become essential to the company's daily operations. (part5_practise/part5_Collection1_Test3.md, câu 114). To meet holiday demand, Delcourt Logistics operates a sorting facility processing more than ten thousand parcels each night. (part5_practise/part5_Collection1_Test3.md, câu 115). Every visitor to the wellness center receives our updated list of available treatments upon arrival. (part5_practise/part5_Collection1_Test3.md, câu 123). After a thorough review, the board appointed the executive best qualified to lead the merger. (part5_practise/part5_Collection1_Test3.md, câu 128)."
  },
  {
    "sectionId": "passive",
    "title": "Cấu trúc cốt lõi",
    "source": "Collection 1 · Test 2, câu 108, 117, 122; part5_practise/part5_parroto_toiec2026_test3.md, câu 117; part5_practise/part5_Collection1_Test3.md, câu 118",
    "definition": "Dùng be + V3/ed khi chủ ngữ nhận hành động. Be phải được chia theo thì và chủ ngữ. Câu 117: specifically bổ nghĩa hành động thiết kế trong cấu trúc bị động be designed. Collocation make an announcement ở dạng bị động was made.",
    "pattern": "S + be + V3/ed (+ by + agent) | be specifically designed to V | make an announcement → an announcement is made",
    "signals": [
      "chủ ngữ không tự thực hiện",
      "by + tác nhân"
    ],
    "trap": "Không chọn bị động chỉ vì thấy be + V3 đúng hình thức; phải kiểm tra vai trò nghĩa của chủ ngữ. Không cần quy designed thành tính từ mới giải được vị trí trạng từ. speak sai dạng; tell không kết hợp tự nhiên với announcement; không suy rộng rằng tell luôn cần tân ngữ người.",
    "example": "The guidelines had been clearly explained. The app is specifically designed to provide insights. (Parroto TOEIC 2026 · Test 3, 117). During the busy lunch period, an important announcement was made through the store's public address system. (part5_practise/part5_Collection1_Test3.md, câu 118)."
  },
  {
    "sectionId": "comparisons",
    "title": "So sánh nhất",
    "source": "Collection 1 · Test 2, câu 117; part5_practise/part5_Collection1_Test3.md, câu 120",
    "definition": "Tính từ ngắn dùng the + adj-est; tính từ dài dùng the most + adjective. Có thể đứng trước danh từ. attractive mô tả feature; its thay the trước so sánh nhất.",
    "pattern": "the + adj-est | the most + adjective (+ noun) | the/its most + adjective + noun",
    "signals": [
      "in/of a group",
      "one of the"
    ],
    "trap": "Sau one of the + superlative phải là danh từ số nhiều. attracting có thể là phân từ nhưng không thay tính từ attractive mô tả đặc tính hấp dẫn ở đây.",
    "example": "It is the most innovative feature in the product line. Sales staff at the outdoor equipment shop describe the new backpack's adjustable straps as its most attractive feature for travelers who carry heavy loads on long trips. (part5_practise/part5_Collection1_Test3.md, câu 120)."
  },
  {
    "sectionId": "comparisons",
    "title": "So sánh bằng và hơn",
    "source": "Tài liệu ngữ pháp tham khảo; part5_practise/part5_parroto_toiec2026_test3.md, câu 105; part5_practise/part5_Collection1_Test3.md, câu 121",
    "definition": "So sánh bằng dùng as ... as; so sánh hơn dùng -er hoặc more, thường đi với than. Câu 105: Sau are more cần tính từ productive; those thay employees. it là tân ngữ giả; easier là bổ ngữ so sánh hơn, far nhấn mạnh mức độ.",
    "pattern": "as + adj/adv + as | adj-er/more + adj + than | be more + adjective + than | make it far + comparative + for somebody + to V",
    "signals": [
      "as ... as",
      "than",
      "much/far/even"
    ],
    "trap": "Không dùng đồng thời more và hậu tố -er. production = sản xuất; productivity = năng suất; productively là trạng từ. far easier = dễ hơn nhiều; không dùng far easy; easily là trạng từ, ease là danh từ/động từ.",
    "example": "The new process is more efficient than the old one. more productive than those who take no breaks (Parroto TOEIC 2026 · Test 3, 105). Fairlane Grocery's new self-checkout terminals make it far easier for shoppers to complete their purchases. (part5_practise/part5_Collection1_Test3.md, câu 121)."
  }
]; updates.forEach(({sectionId,...lesson}) => { const section=window.part5Data.theory.find(s=>s.id===sectionId); Object.assign(section.lessons.find(l=>l.title===lesson.title),lesson); }); })();
