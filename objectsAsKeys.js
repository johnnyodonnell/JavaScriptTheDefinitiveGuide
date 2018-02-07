let o = {};

let a = {};
let b = {};

o[a] = 1;

console.log(o[a]); // prints 1
console.log(o[b]); // prints 1

let c = [];
let d = [];

o[c] = 2;

console.log(o[c]); // prints 2
console.log(o[d]); // prints 2

