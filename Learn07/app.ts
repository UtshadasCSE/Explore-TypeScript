function combine(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `Your a is ${a} and b is ${b}`;
  }
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello, ", "World!")); // Hello, World!
