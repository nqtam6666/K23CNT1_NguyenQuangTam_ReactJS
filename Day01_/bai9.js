// Object Property Shorthand
// Bài tập:
// Cho các biến sau, hãy tạo một object person mà không cần lặp lại tên biến.

// js
// Copy
// Edit
// const name = "Alice";
// const age = 25;
// const city = "Hanoi";
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// { name: "Alice", age: 25, city: "Hanoi" }

const name = "Alice";
const age = 25;
const city = "Hanoi";

const person = { name, age, city };
console.log(person);