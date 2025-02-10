class Person{
    constructor(name = "Nguyễn Quang Tâm", age = 20){
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
    setAge(age){
        this.age=age
    }
    getAge(){
        return this.age
    }
}

class Student extends Person{
    constructor(name, age, StdID="S002"){
        super(name,age)
        this.StdID  = StdID
        // this.StdID = 'S001'
    }
    getStudentInfo(){
        return `StudentID: ${this.StdID}\nTên: ${this.name} - Tuổi: ${this.age}`
    }
}


// var person = new Person()
// // person.setAge(21)
// console.log(person.getName())
// console.log(person.getAge())


var student = new Student("2", 21, "S0022");
console.log(student.getStudentInfo())