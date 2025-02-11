// Promise & Async/Await
// Bài tập:
// Viết một Promise mô phỏng việc tải dữ liệu, mất 2 giây rồi trả về "Data Loaded".

// Viết một hàm async fetchData để gọi promise này và in kết quả.
// 📌 Ví dụ đầu vào:

// js
// Copy
// Edit
// fetchData();
// 📌 Kết quả mong đợi (sau 2s):

// js
// Copy
// Edit
// "Data Loaded"

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function main() {
    const data = await fetchData();
    console.log(data);
}
main();
