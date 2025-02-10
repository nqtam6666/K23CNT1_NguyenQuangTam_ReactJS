class Person{
    constructor(){
        this.name = "Nguyễn Quang Tâm"
        this.age = 20
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
var person = new Person()
// person.setAge(21)
console.log(person.getName())
console.log(person.getAge())
