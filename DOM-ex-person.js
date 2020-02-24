$create = document.getElementsByClassName("btnCreate")[0];

function createNew() {
    let personData = document.getElementsByClassName("personData")[0];
    let newName = document.getElementsByClassName("name")[0].value;
    let newSurname = document.getElementsByClassName("surName")[0].value;
    personData.innerHTML += `<h1> My name is ${newName} ${newSurname} </h1>`;
}

class Person {
    constructor(firstName, lastName) {
        this.name = firstName;
        this.surname = lastName;
    }
    sayHello() {
        let parent = document.getElementsByTagName("body")[0];
        let hello = document.createElement("h1");
        hello.innerHTML = "My name is " + this.name + " " + this.surname;
        parent.appendChild(hello);
        console.log("My name is " + this.name + " " + this.surname);
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }
    sayCourse() {
        let parent = document.getElementsByTagName("body")[0];
        let course = document.createElement("h5");
        course.innerHTML = `Hi I am ${this.name} ${this.surname}, I am the teacher at ${this.course}`;
        parent.appendChild(course);
        console.log(`Hi I am ${this.name} ${this.surname}, I am the teacher at ${this.course}`);
    }
}
let teacher1 = new Teacher("Monika", "Swidzinska", "WDFT");
let teacher2 = new Teacher("Joel", "Verkaik", "WDFT");
let teacher3 = new Teacher("Jurgen", "Toneyck", "WDFT");

teacher1.sayCourse();
teacher2.sayCourse();
teacher3.sayCourse();

$create.onclick = createNew;

let person1 = new Person("Monika", "Swidzinska");
let person2 = new Person("Sybille", "Kasslatter");
let person3 = new Person("Damianos", "Makris");
let person4 = new Person("Justin", "Peeters");
let person5 = new Person("Ellena", "Perrone");

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

