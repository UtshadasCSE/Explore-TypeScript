// Primitive and reference types
// Primitive types: number, string, boolean, null, undefined, symbol, bigint (without bracket)
// reference types: object, array, function (If bracket notation is used, it is considered an array type)

// function abcd() {}
// let arr = [1, 2, 3, { name: "John" }];

//let arr: number[] = [1, 2, 3, 4, 5,{name: "John"}]; // This will cause an error because the array is strictly typed to number[]

let arr: [string, number] = ["John", 30]; // This is a tuple type, which allows for a fixed number of elements with specific types
console.log(arr);
