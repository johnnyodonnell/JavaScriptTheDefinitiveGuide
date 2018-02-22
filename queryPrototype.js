// From p.135
// "[constructor.prototype] is not a completely reliable method for
// determining an objects prototype"

/*
 * Example 1
 *
 * constructor.prototype is reliable in this case
 */
const a = {};

console.log(a.constructor);
console.log(a.constructor.prototype);
console.log(a.__proto__);
console.log(Object.getPrototypeOf(a));
console.log(a.constructor.prototype === Object.getPrototypeOf(a));
console.log();

/*
 * Example 2
 *
 * constructor.prototype is NOT reliable in this case
 */
const myPrototype = {name: "Johnny"};
const b = Object.create(myPrototype);

console.log(b.constructor);
console.log(b.constructor.prototype);
console.log(b.__proto__);
console.log(Object.getPrototypeOf(b));
console.log(b.constructor.prototype === Object.getPrototypeOf(b));
console.log();

/*
 * Example 3
 *
 * constructor.prototype is NOT reliable in this case
 *
 * MyConstructor.prototype originally contains a constructor property that
 * points to MyConstructor. Assigning myProtopye overwrites this property.
 */
const MyConstructor = function() {};
// console.log(MyConstructor.prototype.constructor === MyConstructor); // prints true
MyConstructor.prototype = myPrototype;
// console.log(MyConstructor.prototype.constructor === MyConstructor); // prints false

const c = new MyConstructor();

console.log(c.constructor);
console.log(c.constructor.prototype);
console.log(c.__proto__);
console.log(Object.getPrototypeOf(c));
console.log(c.constructor.prototype === Object.getPrototypeOf(c));
console.log();

/*
 * Example 4
 *
 * constructor.prototype is reliable in this case
 *
 * In this case, we are careful not to overwrite the prototype.constructor
 * property.
 */
const MySecondConstructor = function() {};
MySecondConstructor.prototype =
    Object.assign(MySecondConstructor.prototype, myPrototype);

const d = new MySecondConstructor();

console.log(d.constructor);
console.log(d.constructor.prototype);
console.log(d.__proto__);
console.log(Object.getPrototypeOf(d));
console.log(d.constructor.prototype === Object.getPrototypeOf(d));
console.log();

