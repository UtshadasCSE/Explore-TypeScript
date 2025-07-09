function combine(a: number, b: number) {
  let res;
  if (typeof a === "number" && typeof b === "number") {
    res = add(a, b);
  }
  return res;
}
console.log(combine(5, 10));

function add(a: number, b: number) {
  return a + b;
}
