// Object , Array, Tuple ,Enum
console.log("Let's learn Object");
var person = {
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
var newName = (person.name = "12");
console.log("Let's learn Array");
var favLanguage;
console.log("Let's learn Tuple");
var user = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming", "coding"],
    role: "admin",
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    },
    id: 101,
};
if (user.role === "admin") {
    console.log("User is an admin");
}
else if (user.role === "user") {
    console.log("User is a regular user");
}
else {
    console.log("User role is unknown");
}
