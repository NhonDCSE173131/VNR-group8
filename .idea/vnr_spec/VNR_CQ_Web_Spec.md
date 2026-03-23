# VNR CQ Web Spec - Đổi mới, cơ đồ, tiềm lực, vị thế và uy tín quốc tế của Việt Nam

> Tài liệu này dùng làm **spec triển khai cho Copilot / AI coding assistant**.
> Mục tiêu là code một website trình bày học thuật - trực quan - tương tác theo tinh thần của trang tham chiếu **daihoidangtoanquoc.vn**: bố cục trang tin chính luận, hero nổi bật, điều hướng rõ, timeline dài theo kỳ Đại hội, khối tư liệu/infographic, và trải nghiệm đọc theo chiều dọc.
>
> **Yêu cầu bắt buộc:** không làm theo kiểu slide. Website phải là sản phẩm trung tâm của phần thuyết trình, có thể demo trực tiếp, có khu vực tương tác, có dẫn nguồn, có phần AI Usage, có timeline, có ảnh và dữ liệu minh chứng.

---

## 1) Mục tiêu sản phẩm

Thiết kế và code một website học thuật - tương tác cho chủ đề CQ:

**Phát biểu tại Đại hội XIII, Tổng Bí thư Nguyễn Phú Trọng khẳng định:**

> “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.”

Website phải giúp người xem trả lời câu hỏi:

> Nhìn lại hơn 35 năm đổi mới, nhận định này phản ánh một thực tế khách quan hay còn có những thách thức, giới hạn cần nhìn nhận thấu đáo hơn?

Website cần chứng minh, phân tích và phản biện bằng:

- dữ liệu lịch sử;
- dẫn chứng kinh tế - xã hội;
- thành tựu đối ngoại;
- các kỳ Đại hội VIII - XIV;
- các giới hạn, thách thức và phản biện mang tính biện chứng.

---

## 2) Tinh thần thiết kế cần bám

### Phong cách tham chiếu
Thiết kế theo tinh thần của trang:

- `https://daihoidangtoanquoc.vn/`

### Từ khóa giao diện

- chính luận
- trang trọng
- hiện đại
- đậm màu nhận diện đỏ - vàng - trắng
- bố cục tin tức / tư liệu / văn kiện
- nhiều section dọc theo trang
- có hero lớn
- có thanh điều hướng rõ ràng
- có block nổi bật, ảnh, timeline, infographic, cards
- có cảm giác “cổng thông tin chuyên đề”, không phải landing page thương mại

### Mood visual đề xuất

- nền sáng hoặc kem nhạt;
- nhấn màu đỏ đậm, đỏ son, vàng kim nhẹ;
- dùng hoa văn / pattern trống đồng hoặc motif chính luận rất tiết chế;
- typography rõ ràng, nghiêm túc, dễ đọc;
- desktop ưu tiên trải nghiệm đẹp; mobile vẫn responsive tốt;
- animation nhẹ, không màu mè quá mức;
- ưu tiên scroll storytelling.

---

## 3) Mục tiêu chấm điểm cần đáp ứng

Website phải hỗ trợ nhóm đạt tiêu chí assignment sau:

### 3.1. Chiều sâu học thuật và liên kết lý thuyết
- bám nội dung môn học;
- bám logic phát triển đường lối đổi mới qua các kỳ Đại hội;
- thể hiện được luận điểm chính, luận cứ, dẫn chứng và kết luận;
- làm rõ cả mặt khẳng định lẫn mặt giới hạn.

### 3.2. Sáng tạo, hình thức, tính trình bày
- không dùng slide;
- website phải là sản phẩm trung tâm để trình bày;
- có cảm giác như một chuyên trang / hồ sơ tương tác;
- có thể dùng timeline, bản đồ lập luận, quote lớn, data cards, pop-up tư liệu.

### 3.3. Tính tương tác
Website nên có ít nhất vài yếu tố tương tác:
- timeline có thể click;
- tab chuyển giữa “Thành tựu” và “Thách thức”;
- quiz mini hoặc polling mini;
- hover card hiện dữ liệu;
- section “Bạn chọn góc nhìn nào?”;
- câu hỏi phản biện để người xem tương tác.

### 3.4. Ứng dụng AI có trách nhiệm
Website phải có section hoặc trang phụ **AI Usage** gồm:
- công cụ sử dụng;
- mục đích sử dụng;
- prompt chính;
- đầu ra AI hỗ trợ;
- phần nhóm tự chỉnh sửa;
- cam kết liêm chính học thuật;
- đối chiếu nguồn chính thống.

### 3.5. Tính cập nhật và gắn kết thực tiễn
- có số liệu và nguồn tương đối mới;
- có thảo luận về FDI, ngoại giao, thương mại, đổi mới sáng tạo, khí hậu, chất lượng tăng trưởng;
- có liên hệ đến bối cảnh hiện nay.

---

## 4) Kiến trúc thông tin đề xuất

Website nên có cấu trúc như sau:

1. **Header / Top navigation**
2. **Hero opening**
3. **Khối câu hỏi CQ + ảnh Tổng Bí thư Nguyễn Phú Trọng**
4. **Tóm tắt lập luận trung tâm**
5. **Timeline các kỳ Đại hội VIII - XIV**
6. **Phần 1 - Vì sao nhận định này có cơ sở khách quan**
7. **Phần 2 - Những thách thức, giới hạn cần nhìn nhận**
8. **Phần 3 - Đánh giá biện chứng / kết luận nhóm**
9. **Tư liệu - dữ liệu - nguồn tham khảo**
10. **AI Usage**
11. **Footer**

---

## 5) Header / điều hướng

Header cố định khi scroll.

### Logo / branding trái
- tên chuyên đề hoặc tên nhóm;
- có thể dùng text logo:
  - `HỒ SƠ CHUYÊN ĐỀ CQ`
  - `ĐỔI MỚI VÀ VỊ THẾ VIỆT NAM`

### Menu phải
- Trang chủ
- Câu hỏi CQ
- Timeline Đại hội
- Thành tựu
- Thách thức
- Kết luận
- Tư liệu
- AI Usage

### Phần trên cùng có thể thêm
- badge: `Chuyên đề môn Lịch sử Đảng Cộng sản Việt Nam`
- subtitle nhỏ: `Nhóm ... | Assignment CQ`

---

## 6) Hero section

Hero phải tạo ấn tượng mạnh giống tinh thần trang thông tin chính trị - tư liệu.

### Nội dung hero
- tiêu đề lớn:

`Hơn 35 năm đổi mới: Cơ đồ, tiềm lực, vị thế và uy tín quốc tế của Việt Nam nhìn từ Đại hội XIII`

- mô tả ngắn:

`Một hồ sơ trực quan phân tích nhận định của Tổng Bí thư Nguyễn Phú Trọng bằng dữ liệu, sự kiện, văn kiện Đại hội và góc nhìn biện chứng.`

- 2 nút CTA:
  - `Xem timeline Đại hội`
  - `Đọc kết luận nhóm`

### Hero visual
Có thể dùng:
- ảnh nền mờ của hội trường Đại hội;
- overlay đỏ đậm gradient;
- 1 khối quote nổi bật;
- hoặc 1 layout 2 cột: trái là chữ, phải là ảnh.

---

## 7) Khối câu hỏi CQ và quote trọng tâm

Section này phải nổi bật và là trung tâm học thuật.

### Bố cục đề xuất
- bên trái: quote lớn;
- bên phải: ảnh Tổng Bí thư Nguyễn Phú Trọng đang phát biểu.

### Nội dung quote chính

> “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.”

### Dòng mô tả ngay dưới
`Nhận định này về cơ bản phản ánh một thực tế khách quan, nhưng chỉ đúng khi đặt trong so sánh lịch sử dài hạn và không tuyệt đối hóa thành tựu.`

### Câu hỏi CQ hiển thị nguyên văn

**Câu hỏi CQ:**

“Phát biểu tại Đại hội XIII, Tổng Bí thư Nguyễn Phú Trọng khẳng định: ‘Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.’ Nhìn lại hơn 35 năm đổi mới, theo nhóm bạn, nhận định này phản ánh một thực tế khách quan hay còn có những thách thức, giới hạn cần nhìn nhận thấu đáo hơn? Hãy sử dụng dữ liệu, sự kiện và minh chứng cụ thể để chứng minh, phân tích hoặc phản biện nhận định trên.”

---

## 8) Tóm tắt luận điểm trung tâm của nhóm

Section này là phần người xem đọc nhanh 1 lần là hiểu lập trường.

### Nội dung cần hiển thị gần như nguyên văn

Nhận định “Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay” về cơ bản phản ánh một thực tế khách quan, nhưng chỉ đúng khi hiểu đó là một kết luận ở tầm tổng thể lịch sử, đặt trong so sánh với điểm xuất phát rất thấp của Việt Nam trước Đổi mới.

Nó không nên được hiểu theo nghĩa tuyệt đối hóa, như thể mọi vấn đề phát triển đã được giải quyết xong hoặc đất nước đã phát triển thật sự bền vững trên mọi phương diện.

Muốn đánh giá công bằng nhận định này, trước hết phải nhìn lại điểm xuất phát của Việt Nam trước Đổi mới.

Giáo trình cho thấy năm 1986 đất nước ở trong khủng hoảng kinh tế - xã hội nghiêm trọng, hàng hóa khan hiếm, lạm phát tăng vọt, Đổi mới trở thành “đòi hỏi bức thiết của tình hình đất nước”; riêng lạm phát đã từ 300% năm 1985 lên 774% năm 1986.

Nếu đặt bên cạnh xuất phát điểm đó, thì việc Việt Nam thoát khủng hoảng, ổn định xã hội, mở cửa hội nhập và nâng tầm vị thế quốc tế là một bước chuyển lịch sử rất lớn.

### Cách hiển thị đề xuất
- 1 block highlight nền sáng;
- chia thành 3 - 4 đoạn ngắn;
- có pull quote;
- có chỉ số lớn như `1986`, `774%`, `35+ năm đổi mới`.

---

## 9) Timeline các kỳ Đại hội VIII - XIV

Đây là section quan trọng nhất về mặt trải nghiệm.

### Yêu cầu
- làm thành timeline ngang hoặc dọc;
- click vào từng mốc để mở card chi tiết;
- có ảnh + năm + tên Đại hội + ý nghĩa;
- có thể làm sticky timeline khi scroll.

### Dữ liệu timeline

```js
const congressTimeline = [
  {
    id: 'viii',
    label: 'Đại hội VIII',
    years: '1996-2001',
    image: '/assets/01_dai-hoi-viii.jpg',
    summary: 'Đánh dấu bước chuyển sang thời kỳ đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước.',
    bullets: [
      'Rút ra 6 bài học lớn từ 10 năm đổi mới.',
      'Xác định công nghiệp hoá, hiện đại hoá là nhiệm vụ trung tâm.',
      'Nhấn mạnh vai trò khoa học - công nghệ, nguồn lực con người, kinh tế thị trường có sự quản lý của Nhà nước.',
      'Gắn phát triển kinh tế với công bằng xã hội, quốc phòng - an ninh.'
    ]
  },
  {
    id: 'ix',
    label: 'Đại hội IX',
    years: '2001-2006',
    image: '/assets/02_dai-hoi-ix-quang-canh.jpg',
    summary: 'Bước phát triển quan trọng về nhận thức lý luận của Đảng trong thời kỳ đổi mới.',
    bullets: [
      'Khẳng định chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng.',
      'Làm rõ con đường quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa.',
      'Xác định kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát.',
      'Đẩy mạnh hội nhập kinh tế quốc tế, mở rộng đối ngoại.',
      'Tăng cường đại đoàn kết dân tộc và bảo vệ Tổ quốc trong tình hình mới.'
    ]
  },
  {
    id: 'x',
    label: 'Đại hội X',
    years: '2006-2011',
    image: '/assets/03_dai-hoi-x-bo-phieu.png',
    summary: 'Nhấn mạnh đẩy mạnh toàn diện công cuộc đổi mới sau 20 năm thực hiện.',
    bullets: [
      'Tổng kết 20 năm đổi mới, rút ra các bài học lớn.',
      'Bổ sung nhận thức về chủ nghĩa xã hội với các nội dung như dân chủ, công bằng, văn minh, Nhà nước pháp quyền XHCN.',
      'Lần đầu nhấn mạnh mạnh mẽ nhiệm vụ xây dựng, chỉnh đốn Đảng.',
      'Tiếp tục hoàn thiện thể chế kinh tế thị trường định hướng XHCN.',
      'Gắn công nghiệp hoá, hiện đại hoá với kinh tế tri thức.',
      'Mở rộng hội nhập, tiêu biểu là Việt Nam gia nhập WTO năm 2006.'
    ]
  },
  {
    id: 'xi',
    label: 'Đại hội XI',
    years: '2011-2015',
    image: '/assets/04_dai-hoi-xi.webp',
    summary: 'Thông qua Cương lĩnh bổ sung, phát triển năm 2011 và Chiến lược phát triển kinh tế - xã hội 2011-2020.',
    bullets: [
      'Xác định rõ hơn mô hình xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng.',
      'Nêu 8 phương hướng cơ bản xây dựng chủ nghĩa xã hội.',
      'Bổ sung 8 mối quan hệ lớn cần giải quyết trong quá trình đổi mới.',
      'Đề ra 3 đột phá chiến lược: thể chế, nhân lực chất lượng cao, hạ tầng đồng bộ.',
      'Chú trọng giáo dục, khoa học - công nghệ, văn hoá, con người, an sinh xã hội, môi trường và hội nhập quốc tế.'
    ]
  },
  {
    id: 'xii',
    label: 'Đại hội XII',
    years: '2016-2018 (trong doc)',
    image: '/assets/05_tong-bi-thu-nguyen-phu-trong-dai-hoi-xii.webp',
    summary: 'Khẳng định phải đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới trong bối cảnh sau 30 năm đổi mới.',
    bullets: [
      'Tổng kết 30 năm đổi mới và đánh giá thành tựu, hạn chế của nhiệm kỳ trước.',
      'Nhấn mạnh nhiệm vụ đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế, nâng cao năng suất và sức cạnh tranh.',
      'Tiếp tục hoàn thiện kinh tế thị trường định hướng xã hội chủ nghĩa.',
      'Chú trọng đổi mới giáo dục, phát triển khoa học - công nghệ, văn hoá, con người.',
      'Tăng cường quốc phòng, an ninh, đối ngoại và hội nhập quốc tế.',
      'Xác định 6 nhiệm vụ trọng tâm, trong đó nổi bật là xây dựng, chỉnh đốn Đảng và tinh gọn bộ máy.'
    ]
  },
  {
    id: 'xiii',
    label: 'Đại hội XIII',
    years: '2021',
    image: '/assets/06_dai-hoi-xiii-be-mac.jpg',
    summary: 'Bước phát triển mới trong tư duy lãnh đạo, gắn đổi mới với khát vọng phát triển, khoa học - công nghệ, đổi mới sáng tạo và chuyển đổi số.',
    bullets: [
      'Tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới, phát triển đất nước nhanh và bền vững.',
      'Nhấn mạnh khát vọng phát triển đất nước phồn vinh, hạnh phúc.',
      'Coi khoa học - công nghệ, đổi mới sáng tạo, chuyển đổi số là động lực quan trọng.',
      'Đặt các mốc mục tiêu 2025, 2030, 2045.'
    ]
  },
  {
    id: 'xiv',
    label: 'Đại hội XIV',
    years: '2026',
    image: '/assets/07_dai-hoi-xiv.jpg',
    summary: 'Mở ra giai đoạn phát triển mới, nhấn mạnh đổi mới mạnh mẽ tư duy, thể chế và mô hình tăng trưởng mới.',
    bullets: [
      'Nhấn mạnh thể chế là “đột phá của đột phá”.',
      'Xác lập mô hình tăng trưởng mới dựa trên khoa học - công nghệ, đổi mới sáng tạo và chuyển đổi số.',
      'Thúc đẩy chuyển đổi xanh, phát triển nhân lực chất lượng cao và các ngành công nghiệp nền tảng.',
      'Hướng tới mục tiêu 2030 trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao.'
    ]
  }
]
```

### Gợi ý UI timeline
- desktop: timeline ngang với các chấm mốc;
- mobile: timeline dọc;
- khi click hiện panel chi tiết bên dưới;
- có thể kèm tag như `Lý luận`, `Kinh tế`, `Hội nhập`, `Đối ngoại`, `Đổi mới sáng tạo`.

---

## 10) Phần 1 - Luận cứ chứng minh nhận định có cơ sở khách quan

Section này nên dùng layout xen kẽ: đoạn phân tích + data cards + source badges.

### 10.1. Điểm xuất phát rất thấp trước Đổi mới

Nội dung cần hiển thị:

- Năm 1986 đất nước rơi vào khủng hoảng kinh tế - xã hội nghiêm trọng.
- Hàng hóa khan hiếm.
- Lạm phát tăng vọt.
- Đổi mới là đòi hỏi bức thiết của tình hình đất nước.
- Lạm phát tăng từ 300% năm 1985 lên 774% năm 1986.

### 10.2. Thành tựu kinh tế - xã hội

Nội dung cần hiển thị gần như nguyên văn:

Về thành tựu kinh tế - xã hội, nhận định trên có cơ sở khá rõ. Chính giáo trình khẳng định sau hơn 30 năm Đổi mới, Việt Nam đã chuyển từ cơ chế kế hoạch hóa tập trung, quan liêu, bao cấp sang nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.

Đất nước ra khỏi khủng hoảng kinh tế - xã hội vào năm 1996, ra khỏi tình trạng nước nghèo kém phát triển và trở thành nước có thu nhập trung bình vào năm 2008.

Đời sống nhân dân được cải thiện, quốc phòng - an ninh được củng cố, quan hệ đối ngoại được mở rộng.

Báo cáo của Ngân hàng Thế giới cho thấy GDP bình quân đầu người của Việt Nam theo giá cố định 2015 đã tăng từ 481 USD năm 1986 lên 2.655 USD năm 2020; tỷ lệ nghèo theo chuẩn LMIC của WB giảm từ 16,8% xuống 5,0% trong giai đoạn 2010 - 2020, tương đương hơn 10 triệu người thoát nghèo.

### 10.3. Cơ đồ và tiềm lực quốc gia

Nội dung cần hiển thị:

Về cơ đồ và tiềm lực quốc gia, thành quả Đổi mới không chỉ nằm ở tốc độ tăng trưởng, mà còn ở quy mô và khả năng chống chịu của nền kinh tế.

Việt Nam đã trở thành một nền kinh tế năng động, có sức hút đáng kể với bên ngoài.

Tính đến cuối năm 2024, cả nước có **42.002 dự án FDI còn hiệu lực** với tổng vốn đăng ký khoảng **502,8 tỷ USD**; riêng vốn FDI thực hiện năm 2024 ước đạt **25,35 tỷ USD**, tăng **9,4%** so với năm trước.

Điều đó cho thấy Việt Nam không còn là một nền kinh tế đóng kín hay đứng ngoài các chuỗi liên kết toàn cầu như trước.

### 10.4. Vị thế và uy tín quốc tế

Nội dung cần hiển thị:

Bộ Ngoại giao cho biết đến nay Việt Nam đã có quan hệ ngoại giao với **194 quốc gia**, tham gia **17 hiệp định thương mại tự do**, thiết lập khuôn khổ đối tác toàn diện hoặc cao hơn với **42 nước**, trong đó có đầy đủ **5 nước ủy viên thường trực Hội đồng Bảo an Liên hợp quốc** ở cấp đối tác chiến lược toàn diện.

Việt Nam cũng đã được bầu lại vào **Hội đồng Nhân quyền Liên hợp quốc nhiệm kỳ 2026 - 2028**.

Một nguồn chính thức của Bộ Ngoại giao cũng cho biết năm 2025 Việt Nam đã gia nhập nhóm **15 nền thương mại lớn nhất thế giới**, với tổng kim ngạch xuất nhập khẩu vượt **930 tỷ USD**.

Nếu so với một Việt Nam từng bị bao vây, cấm vận và cô lập, thì “vị thế” và “uy tín quốc tế” hôm nay là một bước tiến lớn trong vấn đề đối ngoại và vị thế quốc tế, không phải khẩu hiệu thuần túy.

### 10.5. Năng lực đổi mới sáng tạo

Nội dung cần hiển thị:

Theo WIPO, Việt Nam đứng thứ **44/133** nền kinh tế trong **Global Innovation Index 2024**, xếp thứ **2** trong nhóm nước thu nhập trung bình thấp.

Đây là một dấu hiệu cho thấy “tiềm lực” của Việt Nam không chỉ nằm ở thương mại đơn thuần, mà còn ở năng lực công nghệ và khả năng thích ứng với sự biến đổi của thời đại.

### Gợi ý UI phần này
- 5 cards lớn;
- mỗi card có icon + số lớn + đoạn giải thích;
- có thể thêm chart thanh hoặc counter;
- số liệu phải có tooltip nguồn.

---

## 11) Phần 2 - Những thách thức, giới hạn cần nhìn nhận thấu đáo

Section này nên chuyển tone màu hơi trầm hơn để tạo cảm giác phản biện.

### Mở đầu section

Tuy nhiên, nếu chỉ dừng ở mặt khẳng định mà không nhìn rõ giới hạn, thì nhận định trên sẽ trở nên một chiều.

Chính giáo trình cũng nhấn mạnh điều này: Đại hội XII khi tổng kết 30 năm Đổi mới đã thẳng thắn chỉ ra hạn chế, khuyết điểm, như kinh tế phát triển chưa bền vững, chưa tương xứng với tiềm năng, đổi mới chính trị chưa đồng bộ với đổi mới kinh tế, và bốn nguy cơ lớn vẫn còn tồn tại, có mặt diễn biến phức tạp.

### 11.1. Tiềm lực kinh tế lớn hơn trước nhưng chất lượng phát triển chưa thật vững

- tiếp tục cơ cấu lại nền kinh tế;
- nâng cao chất lượng tăng trưởng;
- năng suất lao động và sức cạnh tranh còn là vấn đề;
- hội nhập sâu tạo sức ép cạnh tranh gay gắt.

### 11.2. Vị thế quốc tế tăng nhưng nội lực chưa đủ mạnh

- Việt Nam vẫn là nước thu nhập trung bình thấp trong nhiều đánh giá của WB ở giai đoạn chuyển tiếp;
- còn chặng đường dài để lên thu nhập trung bình cao và thu nhập cao;
- thành tựu hiện nay là nền tảng, chưa phải đích đến.

### 11.3. Biến đổi khí hậu và rủi ro dài hạn

Nội dung cần hiển thị:

Ngân hàng Thế giới đánh giá Việt Nam là một trong những quốc gia chịu ảnh hưởng mạnh của biến đổi khí hậu; riêng năm 2020, thiệt hại do khí hậu ước khoảng **10 tỷ USD**, tương đương **3,2% GDP**.

Báo cáo năm 2025 của WB cảnh báo rằng nếu không thích ứng đầy đủ, tác động khí hậu có thể làm sản lượng của Việt Nam thấp hơn mức cơ sở **9,1% vào năm 2030** và **12,5% vào năm 2050**.

### 11.4. Đổi mới sáng tạo tiến bộ nhưng chưa đủ để bứt phá công nghệ

Nội dung cần hiển thị:

WIPO ghi nhận Việt Nam **chưa có cụm khoa học - công nghệ nào nằm trong top 100 toàn cầu năm 2024**.

Điều đó cho thấy nền kinh tế vẫn cần chuyển mạnh hơn từ tăng trưởng dựa vào lao động, vốn và hội nhập sang tăng trưởng dựa vào năng suất, tri thức và công nghệ lõi.

### Gợi ý UI phần này
- tab hoặc accordion;
- màu nền đậm hơn phần thành tựu;
- có badge `Giới hạn`, `Thách thức`, `Cảnh báo`;
- có thể thêm sơ đồ đối chiếu `Thành tựu / Rủi ro`.

---

## 12) Phần 3 - Kết luận biện chứng của nhóm

Đây là đoạn kết luận chính. Nên làm thành block lớn, dễ đọc, có thể có nền sáng và đường viền đỏ.

### Nội dung cần hiển thị gần như nguyên văn

Từ các dữ liệu trên, có thể đi đến kết luận:

Nhận định của Tổng Bí thư là đúng về xu thế lớn và đúng trong so sánh lịch sử dài hạn.

Việt Nam hôm nay rõ ràng có quy mô kinh tế lớn hơn, đời sống dân cư tốt hơn, mạng lưới đối ngoại rộng hơn, mức độ hội nhập sâu hơn và uy tín quốc tế cao hơn rất nhiều so với giai đoạn trước Đổi mới.

Nhưng nhận định ấy chỉ thật sự thuyết phục khi đi kèm tinh thần nhìn thẳng vào sự thật: tăng trưởng chưa hoàn toàn bền vững, nội lực khoa học - công nghệ còn hạn chế, bất bình đẳng và các vấn đề xã hội chưa được giải quyết triệt để, áp lực cạnh tranh quốc tế và biến đổi khí hậu ngày càng lớn.

**Kết luận chốt:**

> Đây là một nhận định đúng, nhưng phải được hiểu theo tinh thần biện chứng. Thành tựu to lớn và có ý nghĩa lịch sử là rất rõ ràng; song chính vì thế càng không được chủ quan, tự mãn.

> Nhiệm vụ của giai đoạn tới không chỉ là giữ vững cơ đồ, tiềm lực, vị thế mà còn phải chuyển hóa chúng thành chất lượng phát triển cao hơn, tự chủ hơn, bền vững hơn và công bằng hơn.

---

## 13) Khu vực “Tư liệu / dẫn chứng / nguồn tham khảo”

Thiết kế giống một kho tư liệu.

### Có thể chia thành 4 nhóm nguồn

#### A. Văn kiện và báo chính thống
- Nghị quyết Đại hội XIII
- Nghị quyết Đại hội XIV
- Bài viết về đường lối đối ngoại Đại hội XIII
- Trang chính thức Đại hội Đảng toàn quốc

#### B. Nguồn nhà nước / bộ ngành
- Bộ Kế hoạch và Đầu tư / MPI về FDI
- Bộ Ngoại giao về ngoại giao kinh tế và quan hệ đối ngoại

#### C. Nguồn quốc tế
- World Bank
- WIPO

#### D. Nguồn ảnh tư liệu
- Vietnam Airlines Spirit
- Quân đội Nhân dân
- Dân trí
- Người Lao Động
- Báo Tin tức
- Báo Hà Tĩnh

### UI gợi ý
- cards nguồn;
- icon link ngoài;
- chia cột;
- có tag `Chính thống`, `Quốc tế`, `Tư liệu ảnh`, `Văn kiện`.

---

## 14) AI Usage - bắt buộc

Phải có một section hoặc trang riêng tên là **AI Usage**.

### Nội dung cần giữ nguyên và trình bày đẹp

**Báo cáo sử dụng AI**

**Công cụ sử dụng:** ChatGPT Plus

**Mục đích sử dụng AI:**
Hỗ trợ tổng hợp, hệ thống hóa và rút gọn nội dung học tập về chủ đề “Đảng lãnh đạo tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế giai đoạn 1996 - 2018”.

**Các nội dung AI đã hỗ trợ:**
1. Tóm tắt nội dung giáo trình theo từng giai đoạn và từng kỳ Đại hội.
2. Hệ thống hóa ý chính của các kỳ Đại hội VIII, IX, X, XI, XII để dễ học và dễ trình bày.
3. Rút gọn nội dung dài thành bản tóm tắt ngắn hơn nhưng vẫn giữ được các luận điểm chính.
4. Bổ sung phần mở rộng về Đại hội XIII và Đại hội XIV để tham khảo, đối chiếu và liên hệ thêm ngoài phạm vi chính của đề.
5. Hỗ trợ định hướng cách trình bày: nên dẫn các kỳ Đại hội như phần bối cảnh trước khi đi vào trả lời câu hỏi CQ.
6. Hỗ trợ diễn đạt lại nội dung theo văn phong ngắn gọn, rõ ý, thuận tiện để đưa vào bài viết hoặc website.
7. Hỗ trợ xây dựng phần kết luận / tóm tắt chung cho toàn bộ giai đoạn đổi mới.

**Mức độ sử dụng AI:**
AI được sử dụng như công cụ hỗ trợ tổng hợp, gợi ý cấu trúc và diễn đạt, không thay thế hoàn toàn việc đọc giáo trình và tự chọn lọc nội dung.

**Cách kiểm chứng và sử dụng kết quả AI:**
Sau khi nhận nội dung từ AI, người làm bài đối chiếu lại với giáo trình đã được giao, chọn lọc các ý phù hợp với yêu cầu bài học và chỉnh sửa lại theo mục đích sử dụng thực tế.

### Bổ sung bắt buộc nên có thêm
- 1 khối `Cam kết liêm chính học thuật`;
- 1 bảng `AI output / Nhóm chỉnh sửa`;
- 1 danh sách `Nguồn chính thống dùng để kiểm chứng`.

---

## 15) Nội dung mở đầu từ giáo trình - phần nền tảng học thuật

Có thể thêm một section tên:

`Bối cảnh lý luận: Đảng lãnh đạo tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế giai đoạn 1996 - 2018`

### Nội dung tóm tắt cần đưa vào

Theo giáo trình Lịch sử Đảng Cộng sản Việt Nam, giai đoạn 1996 - 2018 là thời kỳ Đảng tiếp tục lãnh đạo công cuộc đổi mới trong điều kiện thế giới và trong nước có nhiều biến đổi sâu sắc.

Ở đầu giai đoạn này, sau 10 năm đổi mới, Việt Nam đã đạt được những thắng lợi bước đầu về kinh tế, chính trị, văn hoá, xã hội, quốc phòng, an ninh, phá được thế bị bao vây, cô lập, nhưng vẫn là nước nghèo, kém phát triển, còn nhiều vấn đề phải giải quyết.

Đến các giai đoạn sau, đất nước vừa có thuận lợi, thời cơ, vừa đứng trước nhiều khó khăn, thách thức do tác động của toàn cầu hoá, khủng hoảng kinh tế, biến đổi khí hậu, tranh chấp lãnh thổ, hoạt động chống phá của các thế lực thù địch và những hạn chế nội tại của nền kinh tế, của hệ thống chính trị.

Trên cơ sở đó, Đảng từng bước bổ sung, phát triển đường lối đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá, hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa và chủ động, tích cực hội nhập quốc tế.

### Gợi ý UI
- 1 section nền trung tính;
- có cột trái là tóm tắt;
- cột phải là “5 chuyển động lớn”: công nghiệp hoá, thể chế, hội nhập, xây dựng Đảng, phát triển con người.

---

## 16) Nội dung chi tiết từng kỳ Đại hội để làm popup / modal / accordion

> Dùng các đoạn sau để làm nội dung chi tiết mở rộng khi người dùng click timeline.

### 16.1. Đại hội VIII (1996 - 2001)
Đại hội VIII họp tại Hà Nội từ ngày 28-6 đến 1-7-1996. Đại hội diễn ra trong bối cảnh cách mạng khoa học và công nghệ phát triển ở trình độ cao hơn, chủ nghĩa xã hội hiện thực lâm vào thoái trào, trong khi sau 10 năm đổi mới nhân dân Việt Nam đã giành được những thắng lợi bước đầu nhưng đất nước vẫn nghèo, kém phát triển.

Báo cáo chính trị tại Đại hội VIII bổ sung đặc trưng tổng quát về mục tiêu xây dựng chủ nghĩa xã hội ở Việt Nam là: “Dân giàu, nước mạnh, xã hội công bằng, văn minh”. Đại hội khẳng định tổng kết 10 năm đổi mới, nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, tuy một số mặt còn chưa vững chắc; nhiệm vụ chuẩn bị tiền đề cho công nghiệp hoá đã cơ bản hoàn thành, cho phép chuyển sang thời kỳ mới đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước.

### 16.2. Đại hội IX (2001 - 2006)
Đại hội IX của Đảng họp tại Hà Nội từ ngày 19 đến 22-4-2001, được giáo trình xác định là Đại hội mở đầu thế kỷ XXI.

Điểm nổi bật của Đại hội IX là những nhận thức mới về con đường đi lên chủ nghĩa xã hội ở nước ta. Đại hội xác định nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ.

### 16.3. Đại hội X (2006 - 2011)
Đại hội X họp tại Hà Nội từ ngày 18 đến 25-4-2006, khi đất nước đã trải qua 20 năm đổi mới và đạt những thành tựu to lớn, có ý nghĩa lịch sử.

Đại hội X bổ sung hai đặc trưng mới của chủ nghĩa xã hội mà nhân dân ta xây dựng là: “dân giàu, nước mạnh, công bằng, dân chủ, văn minh” và “có Nhà nước pháp quyền xã hội chủ nghĩa”. Đây cũng là lần đầu tiên Đại hội đặt chú trọng hàng đầu đến nhiệm vụ then chốt là xây dựng, chỉnh đốn Đảng.

### 16.4. Đại hội XI (2011 - 2015)
Đại hội XI có nội dung nổi bật là thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011) và Chiến lược phát triển kinh tế - xã hội 2011 - 2020.

Cương lĩnh năm 2011 nêu 8 phương hướng cơ bản xây dựng chủ nghĩa xã hội ở nước ta và 8 mối quan hệ lớn cần nắm vững, giải quyết tốt.

### 16.5. Đại hội XII (2016 - 2018 theo tài liệu nhóm)
Đại hội XII nhấn mạnh các nhiệm vụ chủ yếu như đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế, đẩy mạnh công nghiệp hoá, hiện đại hoá; hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa; đổi mới giáo dục, phát triển khoa học - công nghệ; xây dựng Đảng trong sạch, vững mạnh.

### 16.6. Đại hội XIII (2021)
Đại hội XIII diễn ra trong bối cảnh sau 35 năm đổi mới, đất nước đã đạt nhiều thành tựu quan trọng nhưng cũng phải đối mặt với Covid-19, cạnh tranh chiến lược giữa các nước lớn và yêu cầu mới của Cách mạng công nghiệp lần thứ tư.

Điểm nổi bật là nhấn mạnh khát vọng phát triển đất nước phồn vinh, hạnh phúc; phát huy ý chí tự cường dân tộc; đề cao khoa học - công nghệ, đổi mới sáng tạo và chuyển đổi số.

### 16.7. Đại hội XIV (2026)
Đại hội XIV đặt trọng tâm vào mô hình tăng trưởng mới dựa trên khoa học - công nghệ, đổi mới sáng tạo và chuyển đổi số; thúc đẩy kinh tế dữ liệu, kinh tế số, kinh tế xanh, kinh tế tuần hoàn, chuyển đổi xanh và chuyển đổi năng lượng.

---

## 17) Thành phần UI đề xuất

### 17.1. Các component nên có
- `MainHeader`
- `HeroBanner`
- `QuoteSection`
- `CQQuestionBlock`
- `CongressTimeline`
- `CongressDetailModal`
- `StatsGrid`
- `AchievementCards`
- `ChallengesAccordion`
- `ComparisonSection`
- `ConclusionSection`
- `ReferencesSection`
- `AIUsageSection`
- `Footer`

### 17.2. Thành phần tương tác nên có
- timeline click;
- tabs `Khẳng định / Phản biện / Kết luận`;
- nút `Đọc nhanh 60 giây` để bung bản tóm tắt;
- quiz mini 3 câu;
- filter nguồn `Văn kiện / Quốc tế / Ảnh tư liệu`.

---

## 18) Gợi ý kỹ thuật code

### Stack gợi ý
- Next.js hoặc React + Vite
- Tailwind CSS
- Framer Motion cho animation nhẹ
- lucide-react cho icon

### Yêu cầu kỹ thuật
- responsive;
- semantic HTML;
- dễ chỉnh sửa dữ liệu bằng object / JSON;
- tách dữ liệu nội dung khỏi UI component;
- cho phép thay ảnh nhanh trong thư mục assets;
- hỗ trợ anchor navigation theo từng section.

### Các section id nên đặt
```txt
#home
#cq
#timeline
#thanh-tuu
#thach-thuc
#ket-luan
#tu-lieu
#ai-usage
```

---

## 19) Dữ liệu thống kê đề xuất để render thành cards

```js
const keyStats = [
  {
    label: 'Lạm phát năm 1986',
    value: '774%',
    note: 'Điểm xuất phát rất thấp trước Đổi mới'
  },
  {
    label: 'GDP/người (1986)',
    value: '481 USD',
    note: 'Theo giá cố định 2015'
  },
  {
    label: 'GDP/người (2020)',
    value: '2.655 USD',
    note: 'Cho thấy chuyển biến dài hạn'
  },
  {
    label: 'Dự án FDI còn hiệu lực cuối 2024',
    value: '42.002',
    note: 'Tổng vốn đăng ký khoảng 502,8 tỷ USD'
  },
  {
    label: 'Vốn FDI thực hiện năm 2024',
    value: '25,35 tỷ USD',
    note: 'Tăng 9,4% so với năm trước'
  },
  {
    label: 'Quan hệ ngoại giao',
    value: '194 quốc gia',
    note: 'Mạng lưới đối ngoại rộng'
  },
  {
    label: 'FTA',
    value: '17',
    note: 'Hội nhập sâu'
  },
  {
    label: 'Global Innovation Index 2024',
    value: '44/133',
    note: 'Thứ 2 trong nhóm nước thu nhập trung bình thấp'
  }
]
```

---

## 20) Kịch bản trình bày 10 - 20 phút dựa trên website

### Flow thuyết trình đề xuất
1. mở hero + quote;
2. đọc câu hỏi CQ;
3. nêu lập trường nhóm trong 30 - 45 giây;
4. kéo xuống timeline để cho thấy tiến trình đổi mới;
5. đi vào các luận cứ chứng minh thành tựu;
6. chuyển sang các giới hạn và thách thức;
7. chốt kết luận biện chứng;
8. mở AI Usage và nguồn để thể hiện minh bạch.

---

## 21) Danh sách ảnh nên dùng trong thư mục assets

```txt
/assets/01_dai-hoi-viii.jpg
/assets/02_dai-hoi-ix-quang-canh.jpg
/assets/03_dai-hoi-x-bo-phieu.png
/assets/04_dai-hoi-xi.webp
/assets/05_tong-bi-thu-nguyen-phu-trong-dai-hoi-xii.webp
/assets/06_dai-hoi-xiii-be-mac.jpg
/assets/07_dai-hoi-xiv.jpg
```

### Gợi ý dùng ảnh theo section
- Hero: `06_dai-hoi-xiii-be-mac.jpg` hoặc `07_dai-hoi-xiv.jpg`
- Quote CQ: `05_tong-bi-thu-nguyen-phu-trong-dai-hoi-xii.webp`
- Timeline: dùng toàn bộ ảnh theo từng mốc

---

## 22) Reference list để hiển thị ở cuối trang

```txt
https://www.mpi.gov.vn/en/Pages/2025-1-14/FDI-attraction-situation-in-Vietnam-and-Vietnam-s-ehsipf.aspx
https://www.worldbank.org/en/country/vietnam/publication/viet-nam-2045-growing-greener-pathways-to-a-resilient-and-sustainable-future
https://documents1.worldbank.org/curated/en/099945004182217194/pdf/P17626100f8c0005d0b7270db2c28481e36.pdf
https://vnconsulate-khonkaen.mofa.gov.vn/web/ministry-of-foreign-affairs/detail/chi-tiet/economic-diplomacy-2025-turning-the-tide-unlocking-resources-shaping-new-development-space-58870-590.html
https://mofa.gov.vn/en/web/ministry-of-foreign-affairs/detail/chi-tiet/pm-s-article-spotlights-economic-diplomacy-for-vietnam-s-prosperity-58424-177.html
https://nhandan.vn/nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiv-cua-dang-post941736.html
https://nhandan.vn/duong-loi-doi-ngoai-dai-hoi-xiii-voi-khat-vong-phat-trien-cua-dat-nuoc-post640738.html
https://nhandan.vn/nghi-quyet-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiii-post636568.html
https://daihoidangtoanquoc.vn/
```

---

## 23) Prompt mẫu để đưa tiếp cho Copilot / Cursor / AI code assistant

```txt
Hãy code cho tôi một website React/Next.js bằng Tailwind theo đúng spec trong file markdown này.

Yêu cầu:
- giao diện theo tinh thần trang daihoidangtoanquoc.vn: trang trọng, chính luận, hiện đại;
- có header sticky, hero lớn, quote section, timeline Đại hội VIII-XIV, section thành tựu, section thách thức, section kết luận, section tư liệu, section AI Usage;
- dùng dữ liệu trong file markdown này làm nội dung chính;
- timeline phải tương tác được, click vào từng Đại hội sẽ hiện nội dung chi tiết;
- responsive đẹp trên desktop và mobile;
- animation nhẹ bằng Framer Motion;
- không làm kiểu slide;
- code sạch, tách data khỏi component;
- đọc ảnh từ thư mục /public/assets;
- style nhấn màu đỏ, vàng, trắng, nền sáng;
- typography rõ ràng, phù hợp chủ đề chính luận;
- thêm section mini quiz hoặc poll để tăng tính tương tác;
- thêm phần nguồn tham khảo rõ ràng ở cuối trang.
```

---

## 24) Ghi chú biên tập

- Vì tài liệu gốc của nhóm có trộn cả phần giáo trình, phần mở rộng và phần định hướng trình bày, khi code nên giữ cấu trúc rõ: `Bối cảnh - Timeline - Thành tựu - Thách thức - Kết luận - AI Usage - References`.
- Không nên dồn toàn bộ chữ thành một trang quá đặc; cần chia thành block ngắn, cards, accordion, tabs, quote box, data cards.
- Không nên lạm dụng hiệu ứng phức tạp. Chủ đề này cần cảm giác tin cậy, nghiêm túc, chính thống.
- Nên thêm nút `Trở về đầu trang`.
- Nên có footer ghi tên nhóm, môn học, năm thực hiện.

---

## 25) Nguồn gốc nội dung của spec này

- Dựa trên file DOC người dùng cung cấp.
- Mục tiêu là chuyển toàn bộ ý tưởng và nội dung trong doc thành **một bản markdown đủ chi tiết để AI coding assistant có thể dựng website**.
- Có bổ sung cấu trúc UX/UI, kiến trúc thông tin và định hướng component để việc code dễ hơn.


---

## 26) Bổ sung quan trọng sau khi soát lại file DOC

Để bám đúng file DOC gốc, thư mục assets đã được cập nhật thêm toàn bộ ảnh trích trực tiếp từ doc.

### Hai ảnh người dùng đã nhắc tới và bắt buộc phải có
```txt
/assets/from-doc/12_quote-zing-xu-can-bo-khong-phai-vi-thu-oan-ai.png
/assets/from-doc/13_chart-tang-truong-kinh-te-giam-ngheo-1986-1993.png
```

### Cách dùng đúng theo nội dung doc
- Section quote / CQ: dùng `12_quote-zing-xu-can-bo-khong-phai-vi-thu-oan-ai.png`
- Section dữ liệu minh chứng trước - sau Đổi mới: dùng `13_chart-tang-truong-kinh-te-giam-ngheo-1986-1993.png`
- Section timeline Đại hội: ưu tiên các ảnh `from-doc/01` đến `from-doc/08`
- Section phụ hoặc modal tư liệu: dùng `from-doc/09` đến `from-doc/19`

### Danh sách assets trích trực tiếp từ doc
```txt
/assets/from-doc/01_dai-hoi-viii-historic.png
/assets/from-doc/02_dai-hoi-ix-quang-canh.png
/assets/from-doc/03_dai-hoi-ix-tong-bi-thu-tang-hoa.png
/assets/from-doc/04_dai-hoi-x-bo-phieu.png
/assets/from-doc/05_dai-hoi-xi-quang-canh.png
/assets/from-doc/06_dai-hoi-xii-tong-bi-thu-nguyen-phu-trong.png
/assets/from-doc/07_dai-hoi-xiii-tong-bi-thu-nguyen-phu-trong.png
/assets/from-doc/08_tong-bi-thu-phat-bieu-hoi-nghi.png
/assets/from-doc/09_tien-trinh-doi-moi-infographic.png
/assets/from-doc/10_banner-chang-duong-ve-co-cau-dang.png
/assets/from-doc/11_quote-card-dat-nuoc-chua-bao-gio-co-duoc-co-do.png
/assets/from-doc/12_quote-zing-xu-can-bo-khong-phai-vi-thu-oan-ai.png
/assets/from-doc/13_chart-tang-truong-kinh-te-giam-ngheo-1986-1993.png
/assets/from-doc/14_notes-cq-1.png
/assets/from-doc/15_notes-cq-2.png
/assets/from-doc/16_notes-cq-3.png
/assets/from-doc/17_notes-cq-4.png
/assets/from-doc/18_notes-cq-5.png
/assets/from-doc/19_notes-cq-6.png
```

### Gợi ý thay nhanh trong code
```ts
const cqQuoteImage = '/assets/from-doc/12_quote-zing-xu-can-bo-khong-phai-vi-thu-oan-ai.png'
const povertyChartImage = '/assets/from-doc/13_chart-tang-truong-kinh-te-giam-ngheo-1986-1993.png'
```
