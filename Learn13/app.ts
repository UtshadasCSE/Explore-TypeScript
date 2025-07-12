class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  drive() {
    console.log(`Driving a ${this.brand}`);
  }
}

const myCar = new Car("Toyota");
const myCarss = new Car("Toyotas");

class Person {
  name: string;
  age: number;
  role: string;
  hobbies: string[];
  constructor(name: string, age: number, role: string, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.hobbies = hobbies;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}. I am a ${this.role}.`);
  }
}

const employee: Person = new Person("Jivan", 30, "Software Engineer", [
  "coding",
  "reading",
]);
const employee2: Person = new Person("Jivan2", 31, "Software Engineer2", [
  "coding2",
  "reading2",
]);
employee.greet();
employee2.greet();
