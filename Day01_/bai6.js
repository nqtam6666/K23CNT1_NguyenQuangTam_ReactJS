// Rest & Spread Operator (...)
// Bài tập:
// Viết một hàm sumAll có thể nhận vào bất kỳ số lượng số nào và trả về tổng của chúng.

// 📌 Ví dụ đầu vào:

// js
// Copy
// Edit
// console.log(sumAll(1, 2, 3, 4, 5));
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// 15

const sumAll = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1,2,3,4,5))

