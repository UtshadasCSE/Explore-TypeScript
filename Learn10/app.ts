function add(x: number, y: number): number {
  return x + y;
}
console.log(add(10, 10));

let greet: Function;

greet = () => {
  console.log("Hello, World!");
};
