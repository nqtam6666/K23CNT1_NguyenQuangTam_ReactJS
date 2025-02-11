// Set (Loại bỏ phần tử trùng lặp)
// Bài tập:
// Cho mảng sau, hãy dùng Set để loại bỏ phần tử trùng lặp.

// js
// Copy
// Edit
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// [1, 2, 3, 4, 5]

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// Cách hoạt đ��ng: