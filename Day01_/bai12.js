// Spread Operator (Copy & Merge Arrays)
// Bài tập:
// Cho hai mảng sau, hãy tạo một mảng mới chứa tất cả phần tử của cả hai mảng.

// js
// Copy
// Edit
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);