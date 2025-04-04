# Ứng dụng Tính BMI
🚀 Cách Chạy Ứng Dụng BMI từ GitHub

1️⃣ Clone Dự Án Từ GitHub
Trước tiên, người dùng cần tải mã nguồn từ GitHub về:
bash
Sao chép
Chỉnh sửa
git clone https://github.com/tai-khoan-github/BMI_Capacitor.git
cd BMI_Capacitor

2️⃣ Cài Đặt Node.js & Ionic
🔹 Nếu chưa có, tải Node.js tại: https://nodejs.org/
🔹 Cài đặt Ionic CLI:
bash
Sao chép
Chỉnh sửa
npm install -g @ionic/cli

3️⃣ Cài Đặt Dependencies (Thư Viện Cần Thiết)
bash
Sao chép
Chỉnh sửa
npm install

4️⃣ Chạy Ứng Dụng Trên Trình Duyệt
Nếu muốn chạy thử trên trình duyệt:
bash
Sao chép
Chỉnh sửa
ionic serve
📌 Ứng dụng sẽ mở tại: http://localhost:8100/

5️⃣ Chạy Ứng Dụng Trên Điện Thoại Android
📱 Nếu muốn chạy trên điện thoại Android, làm theo các bước sau:
📌 Cài đặt Capacitor
bash
Sao chép
Chỉnh sửa
npm install @capacitor/core @capacitor/cli
npx cap init TinhBMI com.example.bmi
📌 Thêm và Mở Android Studio
bash
Sao chép
Chỉnh sửa
npx cap add android
npx cap sync
npx cap open android
📌 Sau đó nhấn "Run" trên Android Studio để chạy ứng dụng trên thiết bị hoặc giả lập.

6️⃣ Chạy Ứng Dụng Trên iOS (Chỉ Dành Cho MacOS)
📌 Nếu sử dụng MacOS, người dùng có thể chạy trên iPhone Simulator bằng Xcode.
📌 Thêm và Mở Xcode
bash
Sao chép
Chỉnh sửa
npx cap add ios
npx cap sync
npx cap open ios
📌 Sau đó, chạy ứng dụng bằng Xcode.

 📌 HƯỚNG DẪN SỬ DỤNG ỨNG DỤNG TÍNH BMI
Ứng dụng này giúp bạn tính toán chỉ số BMI (Body Mass Index) để đánh giá tình trạng cân nặng của mình.

📥 1. Nhập thông tin cá nhân
Chiều cao (cm): Nhập chiều cao của bạn (vd: 170).

Cân nặng (kg): Nhập cân nặng hiện tại (vd: 65).

Bạn không thể bấm "Tính BMI" nếu chưa nhập đầy đủ thông tin.

📊 2. Tính toán BMI
Bấm nút 📌 "Tính BMI".

Kết quả hiển thị gồm:
✅ Chỉ số BMI (vd: 22.5).
✅ Kết luận: (Gầy, Bình thường, Thừa cân, Béo phì).

Hệ thống sẽ gửi thông báo kết quả BMI ngay cả khi bạn thoát ứng dụng.

📤 3. Chia sẻ kết quả
Bấm 📤 "Chia sẻ kết quả" để gửi chỉ số BMI của bạn qua các ứng dụng khác (Zalo, Messenger, Email...).

📷 4. Chụp ảnh
Bấm 📷 "Chụp ảnh" để lưu ảnh cá nhân.

Ảnh sẽ hiển thị ngay trên ứng dụng sau khi chụp.

📌 Lưu ý
Chỉ số BMI chỉ mang tính tham khảo.

Để có đánh giá chính xác hơn về sức khỏe, hãy tham khảo ý kiến chuyên gia dinh dưỡng.

🔥 Chúc bạn có một trải nghiệm tuyệt vời với ứng dụng! 🚀

Giao diện APP
![alt text](image.png)