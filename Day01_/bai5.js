// Default Parameters
// Bài tập:
// Viết một hàm sayHello có một tham số name, nhưng nếu không truyền vào thì mặc định là "Guest".

// 📌 Ví dụ đầu vào:

// js
// Copy
// Edit
// console.log(sayHello());       // "Hello, Guest!"
// console.log(sayHello("John")); // "Hello, John!"


const sayHello = (name) => {
    name = name || "Guest"; 
    return "Hello, "+ name+ "!"
}

console.log(sayHello());       
console.log(sayHello("John"));