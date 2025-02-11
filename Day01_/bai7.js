// Lớp (Class)
// Bài tập:
// Tạo một class Animal có thuộc tính name và phương thức speak(), in ra "The [name] makes a sound".

// 📌 Ví dụ đầu vào:

// js
// Copy
// Edit
// const dog = new Animal("Dog");
// dog.speak();
// 📌 Kết quả mong đợi:

// js
// Copy
// Edit
// "The Dog makes a sound"


class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`The ${this.name} makes a sound`);
    }
}

const dog = new Animal("Dog");
dog.speak()