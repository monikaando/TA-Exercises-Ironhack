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
        parent.appendChild(hello); cd
        console.log("My name is " + this.name + " " + this.surname);
    }
}
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
person6.createNew();

