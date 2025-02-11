// Destructuring
// Bài tập:
// Cho object sau:

// js
// Copy
// Edit
// const person = { name: "Bob", age: 30, city: "New York" };
// Dùng destructuring để trích xuất name và age ra biến riêng.
// In chúng ra màn hình.
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// Bob 30

const person = { name: "Bob", age: 30, city: "New York" };
const {name, age}    = person;
console.log(name, age) // Bob 30

