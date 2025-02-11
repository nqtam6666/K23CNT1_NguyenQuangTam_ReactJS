// Template Strings (${})
// Bài tập:
// Viết một hàm greet nhận vào một tham số name và trả về chuỗi "Hello, [name]!", sử dụng template literals.

// 📌 Ví dụ đầu vào:

// js
// Copy
// Edit
// console.log(greet("Alice"));
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// "Hello, Alice!"


const greet = (name) => {
    return `Hello, ${name}!`
}

console.log(greet("Alice")); // Hello, Alice!