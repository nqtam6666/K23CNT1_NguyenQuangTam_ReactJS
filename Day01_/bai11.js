// Array Destructuring Swap
// Bài tập:
// Cho hai biến a = 5 và b = 10, hãy dùng destructuring để đổi chỗ hai giá trị mà không dùng biến tạm.

// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// console.log(a, b); // 10, 5

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b); // 10, 5