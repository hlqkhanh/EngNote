window.part5Data = window.part5Data || {};

(() => {
  const card = (topicId, id, sourceTestIds, front, answer, explanation, example, trap, tags = []) => ({
    id: `${topicId}-${id}`, topicId, sourceTestIds, front,
    back: { answer, explanation, example, trap }, tags
  });
  const quiz = (topicId, id, sourceTestIds, stem, answers, correctIndex, explanation) => {
    const quizId = `${topicId}-quiz-${String(id).padStart(2, "0")}`;
    const choices = answers.map((text, index) => ({ id: `${quizId}-${String.fromCharCode(97 + index)}`, text }));
    return { id: quizId, topicId, sourceTestIds, stem, choices, answerId: choices[correctIndex].id, explanation };
  };

  window.part5Data.flashcards = [
    card("weak-prepositions", "ahead-beforehand", ["c1t2"], "Phân biệt ahead of và beforehand.", "ahead of + noun/time; beforehand đứng độc lập như trạng từ.", "Ahead of là cụm giới từ nên nhận tân ngữ. Beforehand không nhận danh từ trực tiếp.", "Submit the payment ahead of the due date. Submit it beforehand.", "Không viết beforehand the due date.", ["time"]),
    card("weak-prepositions", "before", ["c1t2"], "Before có thể theo sau bởi thành phần nào?", "before + noun hoặc before + clause", "Before vừa có thể là giới từ trước danh từ, vừa có thể là liên từ trước mệnh đề.", "before noon; before the class begins", "Đừng nhầm với beforehand, vốn đứng độc lập.", ["time"]),
    card("weak-prepositions", "throughout", ["c1t1", "c1t2"], "Throughout diễn tả hai phạm vi nào?", "Toàn bộ thời gian hoặc khắp một không gian.", "Throughout bao phủ trọn một giai đoạn/sự kiện hoặc toàn bộ khu vực.", "throughout the three-day fair; throughout the region", "Among chỉ trong một nhóm, không có nghĩa khắp khu vực.", ["time", "place"]),
    card("weak-prepositions", "within", ["c1t1"], "Cấu trúc within + duration có nghĩa gì?", "Trong vòng, không muộn hơn khoảng thời gian đã nêu.", "Within đặt một giới hạn thời gian tính từ mốc hiện tại hoặc mốc ngữ cảnh.", "within five business days", "After five days nghĩa là sau năm ngày, không phải trong vòng năm ngày.", ["time"]),
    card("weak-prepositions", "between-among", ["c1t1", "c1t2"], "Phân biệt between và among.", "between A and B cho hai bên/mốc; among + plural/group cho một nhóm.", "Between nhấn mạnh quan hệ giữa các đối tượng xác định; among đặt một đối tượng trong nhóm.", "between Monday and Friday; among all staff members", "Between cần các bên hoặc mốc có thể xác định.", ["contrast"]),
    card("weak-prepositions", "along-across", ["c1t2"], "Phân biệt along và across khi diễn tả chuyển động.", "along = dọc theo; across = băng ngang từ bên này sang bên kia.", "Chọn theo hình ảnh đường đi, không dịch rời từng giới từ.", "stroll along the promenade; walk across the street", "Promenade là lối dài nên stroll along tự nhiên hơn stroll across.", ["direction"]),
    card("weak-prepositions", "as-role", ["c1t2"], "Giới từ nào đứng trước chức danh để chỉ vai trò?", "as + role/job", "As mang nghĩa với tư cách là.", "work as a manager", "In a manager không diễn tả vai trò.", ["role"]),
    card("weak-prepositions", "in-sector", ["c1t2"], "Dùng giới từ nào với sector/industry/field/market?", "in + sector/industry/field/market", "In đặt sự thay đổi hoặc hoạt động trong một lĩnh vực.", "declines in the housing sector", "Không chọn on/at chỉ vì dịch máy sang tiếng Việt.", ["field"]),
    card("weak-prepositions", "on-behalf-of", ["c1t2"], "On behalf of có nghĩa và cấu trúc gì?", "Thay mặt cho; on behalf of + person/group.", "Dùng khi một người hành động với tư cách đại diện cho người hoặc nhóm khác.", "accept an award on behalf of a team", "Instead of là thay vì, không mang nghĩa đại diện.", ["fixed phrase"]),
    card("weak-prepositions", "exchange-for", ["c1t2"], "Hoàn thành cấu trúc exchange X ___ Y.", "exchange X for Y", "For giới thiệu thứ nhận lại sau khi đổi X.", "exchange a pass for a tour", "Không dùng exchange X from Y khi nói đổi vật này lấy vật kia.", ["collocation"]),
    card("weak-prepositions", "under-review", ["c1t2"], "Under review có nghĩa gì?", "Đang được xem xét.", "Đây là cụm cố định thường đứng sau be/remain.", "The permit is under review.", "Không phân tích under theo nghĩa vị trí vật lý.", ["fixed phrase"]),
    card("weak-prepositions", "after-which", ["parroto1"], "After which nối hai sự việc theo quan hệ nào?", "Sự việc sau xảy ra sau toàn bộ mệnh đề trước.", "Which thay cho sự việc/mốc vừa nêu; after thể hiện trình tự thời gian.", "The lecture ended, after which questions began.", "Phần sau which vẫn phải là một mệnh đề hoàn chỉnh.", ["relative clause"]),
    card("weak-prepositions", "role-in", ["parroto1"], "Cấu trúc đúng sau role khi nói đóng góp vào hoạt động là gì?", "role in + noun/V-ing", "In giới thiệu lĩnh vực hoặc quá trình mà chủ thể có vai trò.", "a role in obtaining the contract", "Role at doing không phải collocation chuẩn.", ["collocation"]),

    card("weak-context", "finally", ["c1t2"], "Finally phù hợp với ngữ cảnh nào?", "Kết quả cuối cùng xuất hiện sau một quá trình hoặc chờ đợi dài.", "Các dấu hiệu như for months và but thường dẫn tới kết quả cuối cùng.", "After months of repairs, the library finally reopened.", "Promptly nhấn mạnh nhanh chóng, trái với sự trì hoãn dài.", ["adverb"]),
    card("weak-context", "promptly", ["c1t2"], "Promptly thường bổ nghĩa cho hành động nào?", "Hành động được thực hiện nhanh chóng hoặc đúng giờ.", "Thường gặp trong respond promptly, pay promptly, arrive promptly.", "Please respond promptly to the customer.", "Không dùng promptly để diễn tả kết quả sau nhiều tháng trì hoãn.", ["adverb"]),
    card("weak-context", "narrowly", ["c1t2"], "Narrowly thường đi với ý nghĩa nào?", "Sít sao hoặc suýt xảy ra.", "Narrowly thường kết hợp với avoid, escape, win, miss.", "The company narrowly avoided bankruptcy.", "Narrowly reopened không phải collocation tự nhiên.", ["adverb"]),
    card("weak-context", "thoroughly", ["c1t2"], "Thoroughly nhấn mạnh điều gì?", "Mức độ kỹ lưỡng hoặc hoàn toàn.", "Dùng với inspect, review, clean, investigate.", "The technician thoroughly inspected the machine.", "Không dùng để biểu thị trình tự cuối cùng.", ["adverb"]),
    card("weak-context", "estimate-appraisal", ["c1t2"], "Phân biệt estimate và appraisal.", "Estimate là ước tính chi phí/thời gian; appraisal là định giá tài sản.", "Chọn danh từ theo đối tượng được đánh giá.", "an estimate of repair costs; a property appraisal", "Appraisal không phải lựa chọn tự nhiên cho chi phí sửa chữa dự kiến.", ["noun contrast"]),
    card("weak-context", "assessment-inventory", ["c1t2"], "Phân biệt assessment và inventory.", "Assessment là sự đánh giá; inventory là hàng tồn hoặc danh mục vật phẩm.", "Risk/skills assessment đánh giá tình trạng; check inventory là kiểm kê.", "a risk assessment; check the inventory", "Inventory không diễn tả ý kiến đánh giá chất lượng.", ["noun contrast"]),
    card("weak-context", "recreational", ["c1t1"], "Tính từ nào thường đi với amenities trong ngữ cảnh tiện nghi giải trí?", "recreational amenities", "Recreational mô tả hoạt động hoặc tiện nghi phục vụ thư giãn.", "Guests can enjoy recreational amenities.", "Reluctant mô tả thái độ không sẵn lòng của người.", ["collocation"]),
    card("weak-context", "decide-on", ["c1t1"], "Cấu trúc decide on có nghĩa gì?", "Quyết định chọn một phương án/người/vật.", "Dùng sau quá trình xem xét các lựa chọn.", "The committee will decide on a vendor.", "Decide on khác decide to + V.", ["phrasal verb"]),
    card("weak-context", "final", ["parroto1"], "Final mang nghĩa gì khi đứng trước một danh từ trong nhóm?", "Cuối cùng hoặc cuối cùng còn lại.", "Final là tính từ trực tiếp bổ nghĩa danh từ.", "the final antique shop", "Enduring mang nghĩa bền lâu, không phải cuối cùng.", ["adjective"]),
    card("weak-context", "status-update", ["parroto1"], "Collocation nào chỉ thông tin mới về tiến độ?", "status update", "Status update là bản cập nhật tình trạng hoặc tiến độ.", "Residents will receive a status update.", "Status change là sự thay đổi trạng thái, không phải bản tin cập nhật.", ["collocation"]),
    card("weak-context", "precisely", ["parroto1"], "Precisely bổ nghĩa cho locate theo nghĩa nào?", "Định vị một cách chính xác.", "Precisely nói về độ chính xác của vị trí hoặc phép đo.", "The software can precisely locate minerals.", "Greatly locate không phải kết hợp tự nhiên.", ["adverb"]),
    card("weak-context", "certainty", ["parroto1"], "Cụm cố định với any diễn tả mức độ tin cậy của dự báo là gì?", "with any certainty", "Certainty là danh từ chỉ sự chắc chắn.", "Analysts cannot predict demand with any certainty.", "Không chọn danh từ chỉ phẩm chất không liên quan như justice.", ["fixed phrase"]),
    card("weak-context", "actively", ["parroto1"], "Trạng từ nào đi tự nhiên với solicit feedback khi doanh nghiệp chủ động thu thập ý kiến?", "actively solicit feedback", "Actively nhấn mạnh nỗ lực có chủ đích.", "The company is actively soliciting feedback.", "Lightly và cleanly không hợp nghĩa với solicit.", ["collocation"]),
    card("weak-context", "absorb", ["parroto1"], "Động từ nào diễn tả rain gardens hút nước?", "absorb water", "Absorb là hấp thụ chất lỏng vào bên trong.", "Rain gardens are intended to absorb water.", "Undergo cần một quá trình làm tân ngữ, không mang nghĩa hút nước.", ["verb"]),
    card("weak-context", "compensate-for", ["parroto1"], "Cấu trúc compensate for có nghĩa gì?", "Bù đắp cho một thiếu sót hoặc mất mát.", "For giới thiệu điều được bù đắp.", "Experience can compensate for a lack of training.", "Không dùng compensate + thiếu sót mà bỏ for.", ["phrasal verb"]),
    card("weak-context", "diligently", ["parroto1"], "Study diligently nghĩa là gì?", "Học một cách chăm chỉ và chuyên cần.", "Diligently mô tả nỗ lực đều đặn, cẩn thận.", "She studied diligently for the certification.", "Scientifically không đồng nghĩa với chăm chỉ.", ["adverb"]),
    card("weak-context", "commercial", ["parroto1"], "Commercial supplier là gì?", "Nhà cung cấp thương mại/hàng hóa.", "Commercial mô tả hoạt động phục vụ kinh doanh.", "a nearby commercial supplier", "Financial supplier không phải collocation phù hợp trong ngữ cảnh cung cấp gỗ.", ["adjective"]),

    card("weak-wordclass", "operate-family", ["c1t2"], "Nêu các thành viên TOEIC quan trọng của họ operate.", "operate (v), operation (n), operator (người), operational/operable (adj), operationally (adv).", "Chọn dạng theo vị trí và đối tượng: người vận hành là operator; quá trình là operation.", "The operator confirmed that the system was operational.", "Operator và operation đều là danh từ nhưng không thay thế nhau.", ["word family"]),
    card("weak-wordclass", "surprise-family", ["c1t1"], "Phân biệt surprised, surprising và surprisingly.", "surprised: cảm thấy; surprising: gây ngạc nhiên; surprisingly: trạng từ.", "-ed thường mô tả bên nhận cảm xúc; -ing mô tả tác nhân; -ly bổ nghĩa tính từ/động từ.", "a surprisingly compact exterior", "Không dùng surprising để trực tiếp bổ nghĩa compact.", ["word family"]),
    card("weak-wordclass", "finance-family", ["parroto1"], "Nêu các dạng chính của họ finance.", "finance (n/v), financing (n/V-ing), financier (người), financial (adj), financially (adv).", "Responsible là tính từ nên cần trạng từ financially ở trước.", "It is not financially responsible.", "Financial statements là cụm danh từ, không bổ nghĩa responsible.", ["word family"]),

    card("weak-infinitives", "wish-to", ["parroto1"], "Dạng động từ nào đứng sau wish to?", "wish to + V nguyên mẫu", "To đã là dấu hiệu của động từ nguyên mẫu có to.", "Residents who wish to sell should call us.", "Không dùng seller, sold hoặc selling sau wish to.", ["infinitive"]),
    card("weak-infinitives", "purpose", ["parroto1"], "To V có thể diễn tả quan hệ gì ngoài việc theo sau động từ?", "Mục đích: làm gì để đạt mục tiêu nào đó.", "Hỏi 'để làm gì?' để nhận diện to-infinitive chỉ mục đích.", "Contact the agent to arrange a visit.", "Đừng nhầm to chỉ mục đích với giới từ to + noun/V-ing.", ["purpose"]),
    card("weak-infinitives", "after-preposition", ["parroto1"], "Dạng động từ nào thường đứng sau giới từ?", "preposition + V-ing", "Sau in, by, for, without... dùng gerund khi cần một hoạt động.", "a role in obtaining the contract", "Không dùng in to obtain trong cấu trúc role in.", ["gerund"]),

    card("weak-agreement", "singular", ["c1t1"], "Hiện tại đơn với chủ ngữ ngôi thứ ba số ít dùng dạng nào?", "V-s/es", "Động từ chính hòa hợp với chủ ngữ số ít.", "Mr. Osei posts a daily report.", "Không chọn post khi chủ ngữ là Mr. Osei.", ["agreement"]),
    card("weak-agreement", "plural", ["c1t1"], "Hiện tại đơn với chủ ngữ số nhiều dùng dạng nào?", "Động từ nguyên mẫu không -s/es.", "Employees/managers là chủ ngữ số nhiều.", "The managers post daily reports.", "Không thêm -s chỉ vì danh từ đứng gần động từ là số ít.", ["agreement"]),
    card("weak-agreement", "gerund-subject", ["c1t1"], "Cụm V-ing làm chủ ngữ thường đi với động từ số nào?", "Động từ số ít.", "Toàn bộ hoạt động được xem như một đơn vị.", "Reviewing supplier orders takes time.", "Không chia theo danh từ số nhiều nằm trong cụm V-ing.", ["agreement"]),

    card("weak-clauses", "because-due-to", ["c1t1"], "Phân biệt because và due to theo thành phần sau.", "because + S + V; due to + noun phrase.", "Cả hai chỉ nguyên nhân nhưng khác cấu trúc.", "because the crew must replace cables; due to cable replacement", "Không đặt due to trước một mệnh đề đầy đủ.", ["cause"]),
    card("weak-clauses", "considering-that", ["c1t1"], "Considering that thể hiện quan hệ gì?", "Đưa ra một sự thật làm căn cứ/lý do cho kết luận.", "Theo sau là một mệnh đề hoàn chỉnh.", "Considering that it is ready, we can open it.", "Although tạo nhượng bộ, không phải căn cứ cùng chiều.", ["reason"]),
    card("weak-clauses", "although", ["c1t1"], "Although yêu cầu thành phần nào theo sau?", "although + S + V", "Although mở đầu mệnh đề nhượng bộ.", "Although it was ready, the launch was delayed.", "Despite nhận noun/V-ing, không nhận trực tiếp mệnh đề theo cách này.", ["concession"]),
    card("weak-clauses", "provided-that", ["c1t1"], "Provided that có nghĩa gì?", "Miễn là/với điều kiện là; theo sau bởi mệnh đề.", "Nó đặt một điều kiện cần để kết quả xảy ra.", "The order will ship provided that payment is received.", "Không dùng khi vế đầu chỉ là lý do đã có thật.", ["condition"]),
    card("weak-clauses", "so-that", ["parroto1"], "So that nối hai mệnh đề theo quan hệ gì?", "Mục đích hoặc kết quả mong muốn.", "Vế sau thường chứa can/could/will/would.", "The director approved it so that work could proceed.", "Furthermore là trạng từ nối bổ sung ý, không thay cho so that.", ["purpose"]),
    card("weak-clauses", "rather-than", ["parroto1"], "Cấu trúc A rather than B dùng để làm gì?", "Đặt A thay cho hoặc đối lập với B; A và B cần song song.", "Rather than có thể nối từ, cụm từ hoặc dạng động từ tương ứng.", "daily rather than weekly", "As though mang nghĩa như thể, không chỉ lựa chọn.", ["contrast"]),
    card("weak-clauses", "therefore", ["c1t1"], "Therefore khác because ở dấu câu và chức năng thế nào?", "Therefore là trạng từ nối kết quả và cần tách hai mệnh đề bằng dấu phù hợp.", "Dùng dấu chấm hoặc chấm phẩy trước therefore, thường có dấu phẩy sau.", "It was closed; therefore, we left.", "Không dùng therefore để nối trực tiếp như because.", ["result"]),

    card("weak-pronouns", "subject-object", ["c1t1"], "Phân biệt they và them.", "they làm chủ ngữ; them làm tân ngữ sau động từ/giới từ.", "Vị trí trong câu quyết định dạng đại từ.", "They attend. The course is for them.", "Không dùng they ngay sau giới từ for.", ["pronoun"]),
    card("weak-pronouns", "possessive", ["c1t1"], "Phân biệt their và theirs.", "their + noun; theirs đứng độc lập thay cả cụm danh từ.", "Their là tính từ sở hữu, theirs là đại từ sở hữu.", "their skills; The books are theirs.", "Không viết theirs skills.", ["possessive"]),
    card("weak-pronouns", "those-ing", ["c1t1"], "Those + V-ing rút gọn cấu trúc nào?", "those who are + V-ing", "Those thay cho một nhóm người/vật; V-ing bổ nghĩa cho nhóm đó.", "those seeking new skills", "Which/whose không thể đứng độc lập theo cấu trúc này.", ["reduced clause"]),
    card("weak-pronouns", "reflexive", ["c1t1"], "Khi nào dùng đại từ phản thân?", "Khi tân ngữ trùng chủ ngữ hoặc để nhấn mạnh chính chủ thể.", "Dạng phản thân phải khớp ngôi và số với chủ thể.", "She decorated the cake herself.", "Không dùng phản thân thay đại từ tân ngữ thông thường khi hai người khác nhau.", ["reflexive"])
  ];

  window.part5Data.topicQuizzes = [
    quiz("weak-prepositions", 1, ["c1t2"], "Payments must arrive _____ the due date.", ["beforehand", "ahead of", "among", "under"], 1, "Ahead of nhận trực tiếp cụm danh từ chỉ mốc thời gian."),
    quiz("weak-prepositions", 2, ["c1t2"], "Please finish the online form _____.", ["ahead of", "beforehand", "between", "throughout"], 1, "Beforehand là trạng từ độc lập, phù hợp khi không có tân ngữ sau."),
    quiz("weak-prepositions", 3, ["c1t2"], "Visitors walked _____ the riverside path.", ["across", "along", "among", "at"], 1, "Along diễn tả chuyển động dọc theo lối đi."),
    quiz("weak-prepositions", 4, ["c1t2"], "She crossed _____ the street to reach the bank.", ["along", "throughout", "across", "within"], 2, "Across diễn tả băng từ bên này sang bên kia."),
    quiz("weak-prepositions", 5, ["c1t2"], "He accepted the prize _____ the design team.", ["instead of", "on behalf of", "aside from", "among"], 1, "On behalf of mang nghĩa thay mặt cho."),
    quiz("weak-prepositions", 6, ["c1t2"], "Customers may exchange a voucher _____ a ticket.", ["for", "from", "with", "at"], 0, "Cấu trúc là exchange X for Y."),
    quiz("weak-prepositions", 7, ["c1t2"], "Sales declined _____ the automotive sector.", ["on", "at", "in", "as"], 2, "Dùng in với sector/industry/field."),
    quiz("weak-prepositions", 8, ["c1t1"], "The refund will arrive _____ three business days.", ["after", "within", "among", "throughout"], 1, "Within + duration nghĩa là trong vòng thời hạn đó."),
    quiz("weak-prepositions", 9, ["parroto1"], "The meeting ended, _____ which the guests toured the office.", ["after", "across", "among", "inside"], 0, "After which nối hành động xảy ra sau sự việc trước."),
    quiz("weak-prepositions", 10, ["parroto1"], "She played an important role _____ securing the contract.", ["at", "in", "to", "except"], 1, "Role in + noun/V-ing là collocation chuẩn."),

    quiz("weak-context", 1, ["c1t2"], "After a six-month delay, the museum _____ reopened.", ["narrowly", "finally", "thoroughly", "promptly"], 1, "Finally diễn tả kết quả sau thời gian trì hoãn."),
    quiz("weak-context", 2, ["c1t2"], "Please reply _____ to urgent customer requests.", ["promptly", "finally", "narrowly", "commercially"], 0, "Respond/reply promptly là phản hồi nhanh chóng."),
    quiz("weak-context", 3, ["c1t2"], "The mechanic gave us an _____ of the repair cost.", ["inventory", "appraisal", "estimate", "assessment"], 2, "Estimate dùng cho chi phí dự kiến."),
    quiz("weak-context", 4, ["c1t1"], "The hotel offers several _____ amenities.", ["reluctant", "recreational", "eventual", "hopeful"], 1, "Recreational amenities là tiện nghi giải trí."),
    quiz("weak-context", 5, ["c1t1"], "The board will _____ a contractor tomorrow.", ["decide on", "reply to", "focus at", "report for"], 0, "Decide on nghĩa là quyết định chọn."),
    quiz("weak-context", 6, ["parroto1"], "Residents received a status _____ on the project.", ["payment", "update", "request", "exchange"], 1, "Status update là bản cập nhật tiến độ."),
    quiz("weak-context", 7, ["parroto1"], "The scanner can _____ identify damaged parts.", ["precisely", "sincerely", "lightly", "infinitely"], 0, "Precisely identify/locate nhấn mạnh độ chính xác."),
    quiz("weak-context", 8, ["parroto1"], "Demand cannot be predicted with any _____.", ["justice", "certainty", "denial", "excellence"], 1, "With any certainty là cụm cố định."),
    quiz("weak-context", 9, ["parroto1"], "The garden is designed to _____ excess rainwater.", ["undergo", "absorb", "engage", "reply"], 1, "Absorb water nghĩa là hấp thụ nước."),
    quiz("weak-context", 10, ["parroto1"], "Experience may _____ for limited formal training.", ["capture", "compensate", "accumulate", "reply"], 1, "Compensate for nghĩa là bù đắp cho."),

    quiz("weak-wordclass", 1, ["c1t2"], "The senior _____ checks every machine.", ["operation", "operator", "operable", "operationally"], 1, "Cần danh từ chỉ người: operator."),
    quiz("weak-wordclass", 2, ["c1t2"], "The system is fully _____.", ["operator", "operation", "operational", "operationally"], 2, "Sau be cần tính từ operational."),
    quiz("weak-wordclass", 3, ["c1t2"], "Daily _____ of the equipment takes two hours.", ["operate", "operator", "operation", "operable"], 2, "Cần danh từ chỉ quá trình: operation."),
    quiz("weak-wordclass", 4, ["c1t1"], "The product has a _____ compact design.", ["surprise", "surprising", "surprisingly", "surprised"], 2, "Trạng từ surprisingly bổ nghĩa compact."),
    quiz("weak-wordclass", 5, ["c1t1"], "Employees were _____ by the announcement.", ["surprising", "surprised", "surprisingly", "surprise"], 1, "Người nhận cảm xúc dùng surprised."),
    quiz("weak-wordclass", 6, ["c1t1"], "It was a _____ result.", ["surprised", "surprisingly", "surprising", "surprise"], 2, "Kết quả gây ngạc nhiên dùng surprising."),
    quiz("weak-wordclass", 7, ["parroto1"], "The expansion is not _____ responsible.", ["financial", "financially", "financing", "finance"], 1, "Trạng từ financially bổ nghĩa responsible."),
    quiz("weak-wordclass", 8, ["parroto1"], "The company secured _____ for the project.", ["financially", "financier", "financing", "financed"], 2, "Secure financing nghĩa là bảo đảm nguồn vốn."),
    quiz("weak-wordclass", 9, ["parroto1"], "A private investor _____ the new facility.", ["finance", "financed", "financial", "financier"], 1, "Câu cần động từ quá khứ financed."),
    quiz("weak-wordclass", 10, ["parroto1"], "The report describes the firm's _____ condition.", ["financial", "financially", "finance", "financier"], 0, "Tính từ financial bổ nghĩa condition."),

    quiz("weak-infinitives", 1, ["parroto1"], "Residents who wish to _____ should contact us.", ["seller", "sold", "sell", "selling"], 2, "Wish to + V nguyên mẫu."),
    quiz("weak-infinitives", 2, ["parroto1"], "We plan to _____ the office next month.", ["relocate", "relocated", "relocating", "relocation"], 0, "Plan to + V nguyên mẫu."),
    quiz("weak-infinitives", 3, ["parroto1"], "She called the supplier to _____ the order.", ["confirmed", "confirming", "confirmation", "confirm"], 3, "To V diễn tả mục đích của cuộc gọi."),
    quiz("weak-infinitives", 4, ["parroto1"], "He contributed to _____ the new system.", ["develop", "developed", "developing", "development"], 2, "To ở đây là giới từ nên theo sau bởi V-ing."),
    quiz("weak-infinitives", 5, ["parroto1"], "They avoided _____ during peak hours.", ["travel", "to travel", "traveled", "traveling"], 3, "Avoid + V-ing."),
    quiz("weak-infinitives", 6, ["parroto1"], "The team agreed to _____ the deadline.", ["extend", "extended", "extending", "extension"], 0, "Agree to + V nguyên mẫu."),
    quiz("weak-infinitives", 7, ["parroto1"], "By _____ early, we avoided traffic.", ["leave", "to leave", "leaving", "left"], 2, "Sau giới từ by dùng V-ing."),
    quiz("weak-infinitives", 8, ["parroto1"], "The course aims to _____ communication skills.", ["improvement", "improving", "improved", "improve"], 3, "Aim to + V nguyên mẫu."),
    quiz("weak-infinitives", 9, ["parroto1"], "Thank you for _____ the form.", ["complete", "completed", "completing", "to complete"], 2, "Sau for dùng V-ing."),
    quiz("weak-infinitives", 10, ["parroto1"], "The company hired a consultant to _____ costs.", ["reduce", "reduced", "reducing", "reduction"], 0, "To reduce diễn tả mục đích tuyển chuyên gia."),

    quiz("weak-agreement", 1, ["c1t1"], "Mr. Osei _____ a report every morning.", ["post", "posts", "posting", "were posted"], 1, "Chủ ngữ số ít dùng posts."),
    quiz("weak-agreement", 2, ["c1t1"], "The managers _____ weekly reports.", ["posts", "post", "posting", "has posted"], 1, "Chủ ngữ số nhiều dùng động từ nguyên mẫu."),
    quiz("weak-agreement", 3, ["c1t1"], "Reviewing applications _____ time.", ["take", "takes", "taking", "have taken"], 1, "Cụm V-ing làm chủ ngữ số ít."),
    quiz("weak-agreement", 4, ["c1t1"], "Each employee _____ an identification card.", ["carry", "carries", "carrying", "have carried"], 1, "Each + danh từ số ít đi với động từ số ít."),
    quiz("weak-agreement", 5, ["c1t1"], "The list of suppliers _____ on the desk.", ["are", "were", "is", "have"], 2, "Danh từ trung tâm list là số ít."),
    quiz("weak-agreement", 6, ["c1t1"], "Several applicants _____ relevant experience.", ["has", "have", "having", "was having"], 1, "Several + danh từ số nhiều dùng have."),
    quiz("weak-agreement", 7, ["c1t1"], "Neither proposal _____ the budget requirements.", ["meet", "meets", "meeting", "have met"], 1, "Neither thường làm chủ ngữ số ít."),
    quiz("weak-agreement", 8, ["c1t1"], "The director, along with two assistants, _____ today.", ["arrive", "are arriving", "arrives", "have arrived"], 2, "Along with không làm chủ ngữ director thành số nhiều."),
    quiz("weak-agreement", 9, ["c1t1"], "Both machines _____ regular maintenance.", ["requires", "require", "requiring", "has required"], 1, "Both + danh từ số nhiều dùng require."),
    quiz("weak-agreement", 10, ["c1t1"], "Every invoice _____ a reference number.", ["include", "includes", "including", "have included"], 1, "Every + danh từ số ít dùng includes."),

    quiz("weak-clauses", 1, ["c1t1"], "The elevators are closed _____ the crew is replacing cables.", ["due to", "because", "therefore", "despite"], 1, "Because theo sau bởi mệnh đề hoàn chỉnh."),
    quiz("weak-clauses", 2, ["c1t1"], "The elevators are closed _____ cable replacement.", ["because", "although", "due to", "therefore"], 2, "Due to theo sau bởi cụm danh từ."),
    quiz("weak-clauses", 3, ["c1t1"], "_____ that demand is rising, production will increase.", ["Although", "Considering", "Rather", "Despite"], 1, "Considering that đưa ra căn cứ cho quyết định."),
    quiz("weak-clauses", 4, ["c1t1"], "_____ the system is ready, the launch remains delayed.", ["Although", "Because of", "Therefore", "Due to"], 0, "Although + clause diễn tả nhượng bộ."),
    quiz("weak-clauses", 5, ["c1t1"], "The order will ship _____ payment is received.", ["provided that", "due to", "therefore", "rather than"], 0, "Provided that giới thiệu điều kiện."),
    quiz("weak-clauses", 6, ["parroto1"], "The director approved the plan _____ work could begin.", ["furthermore", "so that", "along", "cautiously"], 1, "So that nối mệnh đề mục đích/kết quả."),
    quiz("weak-clauses", 7, ["parroto1"], "Service is available daily _____ only on weekdays.", ["as though", "up to", "rather than", "each time"], 2, "Rather than đặt hai lựa chọn đối lập."),
    quiz("weak-clauses", 8, ["c1t1"], "The office was closed; _____, we returned later.", ["because", "although", "therefore", "due to"], 2, "Therefore là trạng từ nối kết quả sau dấu chấm phẩy."),
    quiz("weak-clauses", 9, ["parroto1"], "Choose the parallel structure.", ["daily rather than only on weekdays", "daily rather than on weekdays only serving", "serve daily rather than served weekly", "daily rather than the staff serves weekly"], 0, "Hai vế quanh rather than phải song song."),
    quiz("weak-clauses", 10, ["c1t1"], "Which phrase correctly precedes a noun phrase?", ["because the delay", "although the delay", "due to the delay", "therefore the delay"], 2, "Due to nhận cụm danh từ; because/although cần mệnh đề."),

    quiz("weak-pronouns", 1, ["c1t1"], "_____ will attend the workshop tomorrow.", ["Them", "Their", "They", "Theirs"], 2, "Vị trí chủ ngữ cần they."),
    quiz("weak-pronouns", 2, ["c1t1"], "The office sent the forms to _____.", ["they", "their", "them", "theirs"], 2, "Sau giới từ to cần đại từ tân ngữ them."),
    quiz("weak-pronouns", 3, ["c1t1"], "Employees should update _____ contact details.", ["they", "them", "their", "theirs"], 2, "Trước danh từ cần tính từ sở hữu their."),
    quiz("weak-pronouns", 4, ["c1t1"], "These desks are ours, and those are _____.", ["their", "them", "theirs", "they"], 2, "Đứng độc lập cần đại từ sở hữu theirs."),
    quiz("weak-pronouns", 5, ["c1t1"], "The course is designed for _____ seeking promotion.", ["those", "whose", "which", "either"], 0, "Those seeking = những người đang tìm kiếm."),
    quiz("weak-pronouns", 6, ["c1t1"], "Ms. Tran prepared the report _____.", ["hers", "herself", "her", "she"], 1, "Herself nhấn mạnh chính Ms. Tran thực hiện."),
    quiz("weak-pronouns", 7, ["c1t1"], "The machine shuts _____ off automatically.", ["it", "its", "itself", "it is"], 2, "Chủ ngữ và tân ngữ cùng là machine nên dùng itself."),
    quiz("weak-pronouns", 8, ["c1t1"], "We invited Lan and _____ to the meeting.", ["she", "her", "hers", "herself"], 1, "Sau động từ invited cần đại từ tân ngữ her."),
    quiz("weak-pronouns", 9, ["c1t1"], "The final decision is _____.", ["their", "them", "theirs", "they"], 2, "Không có danh từ sau nên dùng theirs."),
    quiz("weak-pronouns", 10, ["c1t1"], "Which expression means 'những người đang tìm việc' ?", ["them seeking jobs", "their seeking jobs", "those seeking jobs", "theirs seeking jobs"], 2, "Those + V-ing thay cho those who are + V-ing.")
  ];
})();

// Bổ sung nguồn: part5_practise/part5_practice_2026-10-30.md
window.part5Data.flashcards.push(...[
  {
    "id": "weak-wordclass-practice20261030-111",
    "topicId": "weak-wordclass",
    "sourceTestIds": [
      "practice20261030"
    ],
    "front": "acceptable sau rate ... as — quy tắc nào cần nhớ?",
    "back": {
      "answer": "rate + object + as + adjective",
      "explanation": "rate something as acceptable = đánh giá là chấp nhận được; accepting = cởi mở/khoan dung.",
      "example": "A majority of the city's residents rated its transportation app as acceptable.",
      "trap": "acceptability là danh từ chỉ tính chấp nhận được. acceptance là danh từ chỉ sự chấp nhận. accepting là tính từ mang nghĩa cởi mở/khoan dung, sai nghĩa."
    },
    "tags": [
      "Từ loại",
      "câu 111"
    ]
  },
  {
    "id": "weak-context-practice20261030-113",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261030"
    ],
    "front": "a financially profitable quarter — quy tắc nào cần nhớ?",
    "back": {
      "answer": "financially + adjective + noun",
      "explanation": "profitable = có lãi; financially bổ nghĩa cho tính từ profitable.",
      "example": "Frankie's Boutique had a financially profitable quarter after taking measures to reduce costs.",
      "trap": "plain = đơn giản/bình thường, không diễn tả kết quả tài chính. full = đầy/đủ, không mô tả lợi nhuận. additional = thêm vào, không phù hợp kết quả của giảm chi phí."
    },
    "tags": [
      "Ngữ cảnh",
      "câu 113"
    ]
  },
  {
    "id": "weak-context-practice20261030-121",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261030"
    ],
    "front": "former director khác formed/formal — quy tắc nào cần nhớ?",
    "back": {
      "answer": "former + job title",
      "explanation": "former = cựu/nguyên; formed = được hình thành; formal = trang trọng/chính thức.",
      "example": "Ms. Yamada, former director of the Midlands Chamber of Commerce, was recently appointed to the state trade commission.",
      "trap": "formed là V3 của form, không có nghĩa cựu. formalize là động từ chính thức hóa, không phù hợp vị trí. formality là danh từ nghi thức/thủ tục, sai nghĩa; danh từ có thể bổ nghĩa danh từ ở cấu trúc khác."
    },
    "tags": [
      "Ngữ cảnh",
      "câu 121"
    ]
  },
  {
    "id": "weak-wordclass-practice20261030-127",
    "topicId": "weak-wordclass",
    "sourceTestIds": [
      "practice20261030"
    ],
    "front": "hold auditions và danh từ đếm được — quy tắc nào cần nhớ?",
    "back": {
      "answer": "hold auditions / hold an audition",
      "explanation": "audition đếm được: số ít cần từ hạn định; auditions số nhiều đứng được không có mạo từ.",
      "example": "Opal City's Community Theater is holding auditions for its spring production during the first week of December.",
      "trap": "to audition chỉ mục đích, không làm tân ngữ chỉ sự kiện sau holding ở đây. auditioned là dạng quá khứ/phân từ, không phải danh từ sự kiện. audition số ít cần an hoặc từ hạn định; hold an audition mới đúng."
    },
    "tags": [
      "Từ loại",
      "câu 127"
    ]
  },
  {
    "id": "weak-context-practice20261030-128",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261030"
    ],
    "front": "so hastily that ... — quy tắc nào cần nhớ?",
    "back": {
      "answer": "so + adverb + that + clause",
      "explanation": "hastily = vội vàng; briefly = trong thời gian ngắn/ngắn gọn, không tự mang nghĩa hấp tấp.",
      "example": "Mr. Kane said he packed so hastily this morning that he forgot to bring a suit and tie for tomorrow's dinner.",
      "trap": "enormously chỉ mức độ rất lớn, không hợp packed trong ngữ cảnh này. briefly chỉ thời lượng ngắn, không diễn tả rõ sự vội vàng gây bỏ sót. mysteriously = bí ẩn/khó giải thích, không phù hợp quan hệ nguyên nhân."
    },
    "tags": [
      "Ngữ cảnh",
      "câu 128"
    ]
  }
]);
window.part5Data.topicQuizzes.find(item => item.id === "weak-wordclass-quiz-07").sourceTestIds.push("practice20261030");

window.part5Data.flashcards.push(...[
  {
    "id": "weak-context-practice20261101-109",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "timely và in a timely manner — cần nhớ quy tắc gì?",
    "back": {
      "answer": "10.4.",
      "explanation": "in a timely manner timely là tính từ nghĩa kịp thời; in a timely manner = một cách kịp thời.",
      "example": "Hartwell Insurance recommends submitting your claims in a timely manner.",
      "trap": "current = hiện tại, không mang nghĩa đúng hạn. gradual = dần dần, không mô tả nộp đúng hạn. momentary = thoáng qua, không hợp manner ở đây."
    },
    "tags": [
      "Từ vựng",
      "part5_practise/part5_practice_2026-11-01.md, câu 109"
    ]
  },
  {
    "id": "weak-context-practice20261101-110",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "precisely — Lỗi lặp lại — cần nhớ quy tắc gì?",
    "back": {
      "answer": "3.3.",
      "explanation": "match something precisely precisely diễn tả độ chính xác của sự trùng khớp.",
      "example": "After inspecting the shipment, Delia Marsh confirmed that the delivered chairs matched the approved samples precisely.",
      "trap": "frequently chỉ tần suất. recently chỉ thời gian gần đây. occasionally chỉ tần suất thỉnh thoảng."
    },
    "tags": [
      "Từ vựng",
      "part5_practise/part5_practice_2026-11-01.md, câu 110"
    ]
  },
  {
    "id": "weak-participles-practice20261101-114",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "Mệnh đề quan hệ rút gọn chủ động — cần nhớ quy tắc gì?",
    "back": {
      "answer": "2.1.",
      "explanation": "noun + V-ing + object platform consolidating orders = platform that consolidates orders; has become là vị ngữ chính.",
      "example": "The platform consolidating all incoming orders into a single dashboard has become essential to the company's daily operations.",
      "trap": "consolidates cần that/which để mở mệnh đề. to consolidate có thể chỉ mục đích, tạo cách hiểu khác hợp ngữ pháp; đề chưa loại B chặt chẽ. consolidation là danh từ, không nhận trực tiếp orders theo cấu trúc này."
    },
    "tags": [
      "Phân từ",
      "part5_practise/part5_practice_2026-11-01.md, câu 114"
    ]
  },
  {
    "id": "weak-participles-practice20261101-115",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "Phân từ chủ động sau danh từ — cần nhớ quy tắc gì?",
    "back": {
      "answer": "2.1.",
      "explanation": "facility processing parcels Cơ sở thực hiện việc xử lý bưu kiện; processing rút gọn that processes.",
      "example": "To meet holiday demand, Delcourt Logistics operates a sorting facility processing more than ten thousand parcels each night.",
      "trap": "processes cần that/which trước nó. processed không diễn tả facility thực hiện xử lý parcels. process không nối được hai vị ngữ trong câu."
    },
    "tags": [
      "Phân từ",
      "part5_practise/part5_practice_2026-11-01.md, câu 115"
    ]
  },
  {
    "id": "weak-context-practice20261101-119",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "obstacles — trở ngại — cần nhớ quy tắc gì?",
    "back": {
      "answer": "10.5.",
      "explanation": "obstacles delay a launch obstacles = trở ngại gây trì hoãn; document obstacles = ghi nhận trở ngại.",
      "example": "Project coordinator Miriam Solberg documented the obstacles that had delayed the campaign launch across several markets.",
      "trap": "forecasts = dự báo, không phải từ chỉ cản trở. estimates = ước tính, không phù hợp cản trở. outcomes = kết quả, không hợp nghĩa nguyên nhân cản trở."
    },
    "tags": [
      "Từ vựng",
      "part5_practise/part5_practice_2026-11-01.md, câu 119"
    ]
  },
  {
    "id": "weak-comparisons-practice20261101-121",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "far + so sánh hơn — cần nhớ quy tắc gì?",
    "back": {
      "answer": "7.",
      "explanation": "make it far + comparative + for somebody + to V it là tân ngữ giả; easier là bổ ngữ so sánh hơn, far nhấn mạnh mức độ.",
      "example": "Fairlane Grocery's new self-checkout terminals make it far easier for shoppers to complete their purchases.",
      "trap": "easily là trạng từ, không làm bổ ngữ tính từ của it. easy đúng từ loại nhưng thiếu so sánh hơn sau far. ease là danh từ/động từ, không làm bổ ngữ tính từ ở đây."
    },
    "tags": [
      "So sánh",
      "part5_practise/part5_practice_2026-11-01.md, câu 121"
    ]
  },
  {
    "id": "weak-context-practice20261101-126",
    "topicId": "weak-context",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "considerable increase — cần nhớ quy tắc gì?",
    "back": {
      "answer": "10.5.",
      "explanation": "a considerable increase in + noun considerable = đáng kể về mức độ; a considerable increase in enrollments.",
      "example": "The online learning platform recorded a considerable increase in enrollments last quarter after expanding its course catalog.",
      "trap": "prolonged nhấn kéo dài thời gian, không nói mức tăng lớn. durable mô tả độ bền, không phải mức tăng. plenty không đứng như tính từ trước increase; dùng plenty of khi phù hợp."
    },
    "tags": [
      "Từ vựng",
      "part5_practise/part5_practice_2026-11-01.md, câu 126"
    ]
  },
  {
    "id": "weak-participles-practice20261101-128",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "best qualified to lead — cần nhớ quy tắc gì?",
    "back": {
      "answer": "2.1.",
      "explanation": "the executive best qualified to V qualified là tính từ/phân từ chỉ đủ năng lực; best qualified = đủ năng lực nhất.",
      "example": "After a thorough review, the board appointed the executive best qualified to lead the merger.",
      "trap": "qualifying không mang nghĩa có đủ năng lực nhất ở đây. qualify là nguyên mẫu, không phù hợp best ... to lead. qualification là danh từ, không đứng trong cấu trúc best ... to lead."
    },
    "tags": [
      "Phân từ",
      "part5_practise/part5_practice_2026-11-01.md, câu 128"
    ]
  },
  {
    "id": "weak-participles-active-passive",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "front": "Phân biệt facility processing parcels với recently installed machines.",
    "back": {
      "answer": "V-ing: chủ động; V3: bị động.",
      "explanation": "Facility xử lý parcels; machines được lắp đặt.",
      "example": "a facility processing parcels; recently installed machines",
      "trap": "Không chọn dạng chỉ theo hậu tố hoặc vị trí."
    },
    "tags": [
      "Phân từ",
      "part5_practise/part5_practice_2026-11-01.md, câu 107",
      "part5_practise/part5_practice_2026-11-01.md, câu 115"
    ]
  }
]);
window.part5Data.topicQuizzes.push(...[
  {
    "id": "weak-participles-quiz-01",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The facility _____ parcels operates nightly.",
    "choices": [
      {
        "id": "weak-participles-quiz-01-a",
        "text": "processing"
      },
      {
        "id": "weak-participles-quiz-01-b",
        "text": "processes"
      },
      {
        "id": "weak-participles-quiz-01-c",
        "text": "process"
      },
      {
        "id": "weak-participles-quiz-01-d",
        "text": "to processing"
      }
    ],
    "answerId": "weak-participles-quiz-01-a",
    "explanation": "Đã có operates; facility thực hiện xử lý nên dùng processing."
  },
  {
    "id": "weak-participles-quiz-02",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The machines _____ last week are ready.",
    "choices": [
      {
        "id": "weak-participles-quiz-02-a",
        "text": "installing"
      },
      {
        "id": "weak-participles-quiz-02-b",
        "text": "installed"
      },
      {
        "id": "weak-participles-quiz-02-c",
        "text": "installs"
      },
      {
        "id": "weak-participles-quiz-02-d",
        "text": "install"
      }
    ],
    "answerId": "weak-participles-quiz-02-b",
    "explanation": "Machines nhận hành động lắp đặt nên dùng V3."
  },
  {
    "id": "weak-participles-quiz-03",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The manager _____ the orders works upstairs.",
    "choices": [
      {
        "id": "weak-participles-quiz-03-a",
        "text": "reviews"
      },
      {
        "id": "weak-participles-quiz-03-b",
        "text": "review"
      },
      {
        "id": "weak-participles-quiz-03-c",
        "text": "reviewing"
      },
      {
        "id": "weak-participles-quiz-03-d",
        "text": "reviewed"
      }
    ],
    "answerId": "weak-participles-quiz-03-c",
    "explanation": "Manager thực hiện review; works là vị ngữ chính."
  },
  {
    "id": "weak-participles-quiz-04",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "We selected an executive fully _____ to lead.",
    "choices": [
      {
        "id": "weak-participles-quiz-04-a",
        "text": "qualify"
      },
      {
        "id": "weak-participles-quiz-04-b",
        "text": "qualification"
      },
      {
        "id": "weak-participles-quiz-04-c",
        "text": "qualifying"
      },
      {
        "id": "weak-participles-quiz-04-d",
        "text": "qualified"
      }
    ],
    "answerId": "weak-participles-quiz-04-d",
    "explanation": "qualified to V = đủ năng lực làm gì."
  },
  {
    "id": "weak-participles-quiz-05",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The list _____ yesterday includes new treatments.",
    "choices": [
      {
        "id": "weak-participles-quiz-05-a",
        "text": "updating"
      },
      {
        "id": "weak-participles-quiz-05-b",
        "text": "updates"
      },
      {
        "id": "weak-participles-quiz-05-c",
        "text": "updated"
      },
      {
        "id": "weak-participles-quiz-05-d",
        "text": "update"
      }
    ],
    "answerId": "weak-participles-quiz-05-c",
    "explanation": "Danh sách được cập nhật → updated."
  },
  {
    "id": "weak-participles-quiz-06",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The platform _____ orders has become essential.",
    "choices": [
      {
        "id": "weak-participles-quiz-06-a",
        "text": "consolidating"
      },
      {
        "id": "weak-participles-quiz-06-b",
        "text": "consolidates"
      },
      {
        "id": "weak-participles-quiz-06-c",
        "text": "consolidation"
      },
      {
        "id": "weak-participles-quiz-06-d",
        "text": "consolidated"
      }
    ],
    "answerId": "weak-participles-quiz-06-a",
    "explanation": "Platform thực hiện gom đơn; has become là vị ngữ."
  },
  {
    "id": "weak-participles-quiz-07",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "Customers _____ at the counter may enter now.",
    "choices": [
      {
        "id": "weak-participles-quiz-07-a",
        "text": "waits"
      },
      {
        "id": "weak-participles-quiz-07-b",
        "text": "waiting"
      },
      {
        "id": "weak-participles-quiz-07-c",
        "text": "wait"
      },
      {
        "id": "weak-participles-quiz-07-d",
        "text": "waited"
      }
    ],
    "answerId": "weak-participles-quiz-07-b",
    "explanation": "Customers thực hiện hành động chờ."
  },
  {
    "id": "weak-participles-quiz-08",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The parcels _____ by the facility are ready.",
    "choices": [
      {
        "id": "weak-participles-quiz-08-a",
        "text": "processing"
      },
      {
        "id": "weak-participles-quiz-08-b",
        "text": "processes"
      },
      {
        "id": "weak-participles-quiz-08-c",
        "text": "process"
      },
      {
        "id": "weak-participles-quiz-08-d",
        "text": "processed"
      }
    ],
    "answerId": "weak-participles-quiz-08-d",
    "explanation": "Parcels nhận hành động xử lý, có by chỉ tác nhân."
  },
  {
    "id": "weak-participles-quiz-09",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The recently _____ equipment will be demonstrated.",
    "choices": [
      {
        "id": "weak-participles-quiz-09-a",
        "text": "install"
      },
      {
        "id": "weak-participles-quiz-09-b",
        "text": "installing"
      },
      {
        "id": "weak-participles-quiz-09-c",
        "text": "installed"
      },
      {
        "id": "weak-participles-quiz-09-d",
        "text": "installs"
      }
    ],
    "answerId": "weak-participles-quiz-09-c",
    "explanation": "Equipment được lắp; recently bổ nghĩa installed."
  },
  {
    "id": "weak-participles-quiz-10",
    "topicId": "weak-participles",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The executive best _____ for the role was appointed.",
    "choices": [
      {
        "id": "weak-participles-quiz-10-a",
        "text": "qualified"
      },
      {
        "id": "weak-participles-quiz-10-b",
        "text": "qualify"
      },
      {
        "id": "weak-participles-quiz-10-c",
        "text": "qualification"
      },
      {
        "id": "weak-participles-quiz-10-d",
        "text": "qualifies"
      }
    ],
    "answerId": "weak-participles-quiz-10-a",
    "explanation": "qualified for = đủ năng lực cho vị trí."
  },
  {
    "id": "weak-comparisons-quiz-01",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The terminals make it far _____ to pay.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-01-a",
        "text": "easy"
      },
      {
        "id": "weak-comparisons-quiz-01-b",
        "text": "easily"
      },
      {
        "id": "weak-comparisons-quiz-01-c",
        "text": "easier"
      },
      {
        "id": "weak-comparisons-quiz-01-d",
        "text": "ease"
      }
    ],
    "answerId": "weak-comparisons-quiz-01-c",
    "explanation": "Far nhấn mạnh so sánh hơn easier."
  },
  {
    "id": "weak-comparisons-quiz-02",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The new process is _____ easier than before.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-02-a",
        "text": "very"
      },
      {
        "id": "weak-comparisons-quiz-02-b",
        "text": "far"
      },
      {
        "id": "weak-comparisons-quiz-02-c",
        "text": "many"
      },
      {
        "id": "weak-comparisons-quiz-02-d",
        "text": "most"
      }
    ],
    "answerId": "weak-comparisons-quiz-02-b",
    "explanation": "Far + comparative; very không bổ nghĩa trực tiếp easier."
  },
  {
    "id": "weak-comparisons-quiz-03",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "Self-checkout makes it easier _____ shoppers to pay.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-03-a",
        "text": "for"
      },
      {
        "id": "weak-comparisons-quiz-03-b",
        "text": "of"
      },
      {
        "id": "weak-comparisons-quiz-03-c",
        "text": "with"
      },
      {
        "id": "weak-comparisons-quiz-03-d",
        "text": "by"
      }
    ],
    "answerId": "weak-comparisons-quiz-03-a",
    "explanation": "make it easier for somebody to V."
  },
  {
    "id": "weak-comparisons-quiz-04",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The app makes _____ easier for users to order.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-04-a",
        "text": "them"
      },
      {
        "id": "weak-comparisons-quiz-04-b",
        "text": "their"
      },
      {
        "id": "weak-comparisons-quiz-04-c",
        "text": "themselves"
      },
      {
        "id": "weak-comparisons-quiz-04-d",
        "text": "it"
      }
    ],
    "answerId": "weak-comparisons-quiz-04-d",
    "explanation": "It là tân ngữ giả đại diện việc to order."
  },
  {
    "id": "weak-comparisons-quiz-05",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The new system is easier _____ the old one.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-05-a",
        "text": "that"
      },
      {
        "id": "weak-comparisons-quiz-05-b",
        "text": "than"
      },
      {
        "id": "weak-comparisons-quiz-05-c",
        "text": "as"
      },
      {
        "id": "weak-comparisons-quiz-05-d",
        "text": "to"
      }
    ],
    "answerId": "weak-comparisons-quiz-05-b",
    "explanation": "So sánh hơn dùng than."
  },
  {
    "id": "weak-comparisons-quiz-06",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The app makes it much _____ to complete purchases.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-06-a",
        "text": "easily"
      },
      {
        "id": "weak-comparisons-quiz-06-b",
        "text": "ease"
      },
      {
        "id": "weak-comparisons-quiz-06-c",
        "text": "easy"
      },
      {
        "id": "weak-comparisons-quiz-06-d",
        "text": "easier"
      }
    ],
    "answerId": "weak-comparisons-quiz-06-d",
    "explanation": "Much nhấn mạnh comparative easier."
  },
  {
    "id": "weak-comparisons-quiz-07",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The terminals make it easier for shoppers _____ their bills.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-07-a",
        "text": "paying"
      },
      {
        "id": "weak-comparisons-quiz-07-b",
        "text": "paid"
      },
      {
        "id": "weak-comparisons-quiz-07-c",
        "text": "to pay"
      },
      {
        "id": "weak-comparisons-quiz-07-d",
        "text": "pays"
      }
    ],
    "answerId": "weak-comparisons-quiz-07-c",
    "explanation": "for somebody + to V."
  },
  {
    "id": "weak-comparisons-quiz-08",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "This surface is more _____ than the old one.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-08-a",
        "text": "durable"
      },
      {
        "id": "weak-comparisons-quiz-08-b",
        "text": "durably"
      },
      {
        "id": "weak-comparisons-quiz-08-c",
        "text": "durability"
      },
      {
        "id": "weak-comparisons-quiz-08-d",
        "text": "duration"
      }
    ],
    "answerId": "weak-comparisons-quiz-08-a",
    "explanation": "More + adjective + than."
  },
  {
    "id": "weak-comparisons-quiz-09",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The new method is even _____ than the previous one.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-09-a",
        "text": "easy"
      },
      {
        "id": "weak-comparisons-quiz-09-b",
        "text": "ease"
      },
      {
        "id": "weak-comparisons-quiz-09-c",
        "text": "easier"
      },
      {
        "id": "weak-comparisons-quiz-09-d",
        "text": "easily"
      }
    ],
    "answerId": "weak-comparisons-quiz-09-c",
    "explanation": "Even có thể nhấn mạnh so sánh hơn."
  },
  {
    "id": "weak-comparisons-quiz-10",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "stem": "The checkout is far easier, so shoppers can pay more _____.",
    "choices": [
      {
        "id": "weak-comparisons-quiz-10-a",
        "text": "quick"
      },
      {
        "id": "weak-comparisons-quiz-10-b",
        "text": "quickly"
      },
      {
        "id": "weak-comparisons-quiz-10-c",
        "text": "quickness"
      },
      {
        "id": "weak-comparisons-quiz-10-d",
        "text": "quicker than"
      }
    ],
    "answerId": "weak-comparisons-quiz-10-b",
    "explanation": "Easier mô tả checkout; more quickly bổ nghĩa pay."
  }
]);
window.part5Data.topicQuizzes.find(item => item.id === "weak-context-quiz-07").sourceTestIds.push("practice20261101");

window.part5Data.flashcards.push(...[
  {
    "id": "weak-comparisons-intensifiers",
    "front": "Far/much/even đi với easy hay easier?",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "back": {
      "answer": "far/much/even + comparative: easier",
      "explanation": "Những từ này nhấn mạnh mức độ so sánh hơn.",
      "example": "The terminals make it far easier to pay.",
      "trap": "Không dùng far easy hoặc far easily ở vị trí bổ ngữ tính từ."
    },
    "tags": [
      "So sánh",
      "part5_practise/part5_practice_2026-11-01.md, câu 121"
    ]
  },
  {
    "id": "weak-comparisons-dummy-it",
    "front": "Vai trò của it trong make it easier for shoppers to pay?",
    "topicId": "weak-comparisons",
    "sourceTestIds": [
      "practice20261101"
    ],
    "back": {
      "answer": "It là tân ngữ giả; to pay nêu hành động được đánh giá.",
      "explanation": "Cấu trúc make it + adjective + for somebody + to V.",
      "example": "Self-checkout makes it easier for shoppers to pay.",
      "trap": "Không thay it bằng them hoặc easier bằng easily."
    },
    "tags": [
      "So sánh",
      "part5_practise/part5_practice_2026-11-01.md, câu 121"
    ]
  }
]);
