// From p.135
// "[constructor.prototype] is not a completely reliable method for
// determining an objects prototype"

const a = {name: "Johnny"};
const b = Object.create(a);

console.log(b.constructor);
console.log(b.constructor.prototype);
console.log(b.__proto__);
console.log(Object.getPrototypeOf(b));
console.log();

const C = function() {};
C.prototype = a;

const d = new C();

console.log(d.constructor);
console.log(d.constructor.prototype);
console.log(d.__proto__);
console.log(Object.getPrototypeOf(d));
console.log();

