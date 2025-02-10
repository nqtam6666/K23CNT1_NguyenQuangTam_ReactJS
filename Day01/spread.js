const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Sao chép arr1
console.log(arr2); // [1, 2, 3]


const obj1 = { name: "Tâm", age: 25 };
const obj2 = { age: 26, gender: "Male" };

const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { name: "Tâm", age: 26, gender: "Male" }
