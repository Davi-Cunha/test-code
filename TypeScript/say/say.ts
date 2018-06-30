class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + " " + lastName;
    }
}
interface IPerson{
    firstName: string;
    lastName: string;
}
function say(person: IPerson) {
    return "Hello " + person;
}
var user = new Student("Davi", "Silva");
console.log(say(user));
console.log("3" + 3);