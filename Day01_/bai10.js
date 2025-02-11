class createPerson{
	constructor(name) {
        this.name = name;
        
    }
	greet(){
        return "Hello, I am " + this.name
	}
}
const person = new createPerson("David");
console.log(person.greet());