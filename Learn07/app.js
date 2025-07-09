function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return "Your a is ".concat(a, " and b is ").concat(b);
    }
}
console.log(combine(1, 2)); // 3
console.log(combine("Hello, ", "World!")); // Hello, World!
