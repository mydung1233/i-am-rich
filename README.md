# i-am-rich
# Lab 1: I Am Rich - How to Create React Native Apps From Scratch

Ứng dụng mẫu đầu tiên được xây dựng bằng React Native + Expo, lấy ý tưởng từ ứng dụng I Am Rich trong khóa học Flutter Bootcamp (Angela Yu).

---

## 🎯 Mục tiêu bài Lab

1. Hiểu cấu trúc một ứng dụng React Native cơ bản từ con số 0.
2. Nắm vững cấu trúc Component Tree: `App` ➔ `View` ➔ `AppBar` & `Body` ➔ `Image`.
3. Tùy chỉnh màu sắc và giao diện bằng `StyleSheet`.
4. Biết cách nhúng tài nguyên hình ảnh cục bộ (**Local Image Asset**).
5. Biết cách sử dụng icon với `@expo/vector-icons`.
6. Biết cách đổi biểu tượng ứng dụng (**App Launcher Icon**).

---

## 📂 Cấu trúc thư mục dự án

```text
i-am-rich/
├── assets/
│   └── icon.png             <-- File biểu tượng ứng dụng
├── images/
│   └── diamond.png          <-- File ảnh viên kim cương
├── App.js                   <-- Mã nguồn chính của app
├── app.json                 <-- Cấu hình Expo
├── package.json             <-- Dependencies
└── README.md
```
## 💎 Giải thích mã nguồn (App.js)

**App():** Component chính của ứng dụng.

**View:** Component dùng để xây dựng bố cục giao diện.

**Text:** Hiển thị nội dung văn bản.

**Image:** Hiển thị hình ảnh.

**StyleSheet.create():** Tạo và quản lý style cho các component.

**StatusBar:** Điều chỉnh thanh trạng thái của điện thoại.

````markdown
## 🚀 Cách chạy ứng dụng

**1. Mở Terminal tại thư mục dự án:**

```bash
cd i-am-rich
````

**2. Cài dependencies:**

```bash
npm install
```

**3. Chạy ứng dụng:**

```bash
npx expo start
```

**4. Quét mã QR bằng Expo Go trên điện thoại.**

**Nếu QR không kết nối được:**

```bash
npx expo start --tunnel
```

```
```

