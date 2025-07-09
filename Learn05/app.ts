// Object , Array, Tuple ,Enum
enum Role {
  ADMIN,
  AUTHOR,
  USER,
}

console.log("Let's learn Object");

const person: {
  name: string;
  age: number;
  isEmployed: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
} = {
  name: "John",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
let newName = (person.name = "12");

console.log("Let's learn Array");

let favLanguage: string[];

console.log("Let's learn Tuple");

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: string;
  greet: () => string;
  id: number;
} = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming", "coding"],
  role: "admin",
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
  id: 101,
};

if (user.role === "admin") {
  console.log("User is an admin");
} else if (user.role === "user") {
  console.log("User is a regular user");
} else {
  console.log("User role is unknown");
}
