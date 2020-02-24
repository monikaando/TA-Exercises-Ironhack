class Person {
    constructor(firstName, lastName) {
        this.name = firstName;
        this.surname = lastName;
    }
    sayHello() {
        let parent = document.querySelector("body");
        let hello = document.createElement("h1");
        hello.innerHTML = "My name is " + this.name + " " + this.surname;
        parent.appendChild(hello);
        console.log("My name is " + this.name + " " + this.surname);
    }
}
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