"use strict";
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`Driving a ${this.brand}`);
    }
}
const myCar = new Car("Toyota");
const myCarss = new Car("Toyotas");
class Person {
    constructor(name, age, role, hobbies) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.hobbies = hobbies;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}. I am a ${this.role}.`);
    }
}
const employee = new Person("Jivan", 30, "Software Engineer", [
    "coding",
    "reading",
]);
const employee2 = new Person("Jivan2", 31, "Software Engineer2", [
    "coding2",
    "reading2",
]);
employee.greet();
employee2.greet();
