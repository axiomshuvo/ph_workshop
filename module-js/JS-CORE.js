//# JavaScript একটি Dynamic / Loosely Typed Programming Language।
//@ মানে:
//@ Variable declare করার সময় type লিখতে হয় না।
//@ value change করলে type ও change হয়ে যায়।
//? Example:
let data = 4; // number
data = "Tormuj"; // string
data = false; // boolean
data = [1, 2]; // array
data = {}; // object

//# Non primitive Data
//? এগুলো complex data structure।
//? Mainly:

//@ Object
let user = {
  name: "Rahim",
  age: 25,
};
//@ Array

let nums = [1, 2, 3];

//@ Function
function greet() {
  console.log("Hello");
}

//? ✅ Simple rule
//! | Type      | Category      |
// | --------- | ------------- |
//@ | string    | Primitive     |
//@ | number    | Primitive     |
//@ | boolean   | Primitive     |
//@ | null      | Primitive     |
//@ | undefined | Primitive     |
//@ | object    | Non-primitive |
//@ | array     | Non-primitive |
//@ | function  | Non-primitive |

//! Primitive
//? stored in stack
//? value copy
//? immutable

//@ Non-Primitive
//? stored in heap
//? reference copy
//? mutable

//!  Important JavaScript Trap
console.log(typeof null);

//$ এটা JavaScript এর historical bug।
//$ null actually primitive, কিন্তু typeof দেখায় "object"

////////////////////////////

//# undefined

//@ undefined কি? - Variable declare করা হয়েছে কিন্তু এখনো কোনো value assign করা হয়নি।
//@ typeof undefined is undefined -
//! Common Cases যেখানে undefined পাওয়া যায়

//?  Variable declared but not assigned
let a;
console.log(a); // undefined

//? Object property নেই
let user = {
  name: "Rahim",
};
console.log(user.age); // undefined কারণ age property নেই।

//? Function return না করলে
function test() {}
console.log(test()); // undefined - কারণ function কিছু return করেনি

//? Missing function argument
function greet(name) {
  console.log(name);
}
greet(); // undefined

//? Function এ missing parameter
function add(a, b) {
  console.log(b);
}

add(5); // undefined কারণ b pass করা হয়নি।

//? Array index না থাকলে
let arr = [10, 20];

console.log(arr[5]); // undefined - কারণ index 5 নেই

//! 🔑 Short Summary

//@ undefined পাওয়া যায় যখন:
//? Variable declare কিন্তু value নেই
//? Object property নেই
//? Function return করেনি
//? Function argument pass করা হয়নি
//? Array index নেই
//? Parameter missing

//@ undefined vs null
//! | undefined             | null                          |
// | --------------------- | ----------------------------- |
//? | value assign করা হয়নি | developer intentionally empty |
// ?| JS automatically দেয়  | developer manually দেয়        |
// exp:

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

//! ✅ Short rule
//? undefined → value not assigned yet
//? null → intentionally empty value

////////////////////////////////////////////////////////////////////////////!
//# Truthy and Falsy Values

//@ JavaScript এ কিছু value আছে যেগুলো condition এ evaluate হয় true বা false হিসেবে।
//? Falsy values: false, 0, "", null, undefined, NaN
//? Truthy values: সব কিছু যা falsy না

//@ Example:
if (0) {
  console.log("This won't run");
} else {
  console.log("0 is falsy");
}

if ("") {
  console.log("This won't run");
} else {
  console.log('"" is falsy');
}

if (null) {
  console.log("This won't run");
} else {
  console.log("null is falsy");
}

if (undefined) {
  console.log("This won't run");
} else {
  console.log("undefined is falsy");
}

if (NaN) {
  console.log("This won't run");
} else {
  console.log("NaN is falsy");
}

if ("Hello") {
  console.log('"Hello" is truthy');
}

if ([]) {
  console.log("[] is truthy");
}

if ({}) {
  console.log("{} is truthy");
}

if (!!false) {
  console.log("false is falsy");
} // double negation দিয়ে false কে falsy হিসেবে দেখানো হয়েছে।

//# === Strict Equality Operator
//@ Strict equality operator (===) value এবং type দুইটাই compare করে।
//@ Example:
console.log(5 === 5); // true
console.log(5 === "5"); // false - কারণ type different
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined); // false - কারণ type different

//# == Loose Equality Operator
//@ Loose equality operator (==) value compare করে, type ignore করে।
//@ double equals does type coercion করে, মানে type convert করে তারপর compare করে।
//@ double equals primitives এর ক্ষেত্রে value compare করে, কিন্তু non-primitives এর ক্ষেত্রে reference compare করে।
//! Example:
console.log(5 == "5"); // true - কারণ value same, type ignore করা হয়েছে
console.log(null == undefined); // true - কারণ value same, type ignore করা হয়েছে
console.log(0 == false); // true - কারণ value same, type ignore করা হয়েছে
console.log("" == false); // true - কারণ value same, type ignore করা হয়েছে
console.log(1 == true); // true - কারণ value same, type ignore করা হয়েছে
console.log(2 == true); // false - কারণ value different, even though type ignore করা হয়েছে
console.log(NaN == NaN); // false - কারণ NaN is not equal to anything, even itself
console.log({} == {}); // false - কারণ object reference different
console.log([] == []); // false - কারণ array reference different
console.log([] == ""); // true - কারণ [] is coerced to "" when compared with string

//$ 🔑 Short Summary
//@ === → strict equality (value + type)
//@ == → loose equality (value only, type ignore)

//////////////////////////////////////////////////////////////////////////////////!
//# JavaScript Scope and hoisting

//@ Scope মানে variable, function, এবং object কোথায় accessible তা।
//@ JavaScript এ তিন ধরনের scope আছে: Global Scope, Function Scope, Block Scope

let pi = 3.14; // global scope
function add(a, b) {
  let sum = a + b; // function scope
  return sum * pi; // global variable accessed inside function
}
add(2, 3); // 25.7

if (true) {
  let blockVar = "I am block scoped"; // block scope
  console.log(blockVar); // I am block scoped
}
// console.log(blockVar); // ReferenceError: blockVar is not defined - কারণ blockVar block scope এ আছে।

//@ Hoisting মানে variable এবং function declarations কে তাদের scope এর top এ নিয়ে যাওয়া।
//? Variable hoisting: var declared variables are hoisted and initialized with undefined, but let and const are hoisted without initialization (temporal dead zone)।
console.log(x); // undefined - কারণ var declared variable hoisted হয় এবং initialized হয় undefined দিয়ে।
var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization - কারণ let declared variable hoisted হয় কিন্তু initialized হয় না, তাই temporal dead zone থাকে।
let y = 10;

//@ Function hoisting: Function declarations are hoisted with their body, so they can be called before they are defined.
greet(); // Hello

function greet() {
  console.log("Hello");
}

//@ Function expressions and arrow functions are not hoisted, so they cannot be called before they are defined.
greet2(); // TypeError: greet2 is not a function - কারণ greet2 is not defined yet।
var greet2 = function () {
  console.log("Hi");
};

//$ 🔑 Short Summary
//@ Scope → variable, function, object accessibility
//@ Hoisting → variable and function declarations are moved to the top of their scope
//! | Feature              | Hoisted?          | Initialized?          | Scope           |
// | -------------------- | ----------------- | --------------------- | --------------- |
//? | `var`                | Yes               | Undefined             | Function/Global |
//? | `let`                | Yes               | No (TDZ)              | Block           |
//? | `const`              | Yes               | No (TDZ)              | Block           |
//? | Function Declaration | Yes               | Yes                   | Function/Global |
//? | Function Expression  | Variable: Yes     | No (TDZ if let/const) | Block/Function  |
//? | Arrow Function       | No (if let/const) | No                    | Block/Function  */

//////////////////////////////////////////////////////////////////////////////////!
//# JavaScript Closures
//? Closure হলো যখন একটি ফাংশন তার বাইরের ফাংশনের ভেরিয়েবল “মনে রাখে”, এমনকি বাইরের ফাংশন শেষ হয়ে গেলে ও সেই ভেরিয়েবল অ্যাক্সেস করতে পারে।
//? Closure এর মাধ্যমে আমরা private variables তৈরি করতে পারি এবং data encapsulation achieve করতে পারি।

function outer() {
  let count = 0; // outer function variable

  function inner() {
    count++; // inner function can access and modify outer variable
    console.log(count);
  }

  return inner; // return the inner function
}

const counter = outer(); // counter is now the inner function with access to count
counter(); // 1
counter(); // 2
counter(); // 3

//$ 🔑 Short Summary
//@ Closure → inner function that has access to outer function's variables even after the outer function has finished executing.

//////////////////////////////////////////////////////////////////////////////////!
//#  Callback Functions
//? Callback function হলো একটি ফাংশন যা অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং পরে সেই ফাংশন দ্বারা কল করা হয়।
//? Callback functions asynchronous programming এ খুবই গুরুত্বপূর্ণ, কারণ তারা আমাদেরকে operations সম্পন্ন হওয়ার পরে কিছু কাজ করতে দেয়।

function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data); // callback function is called with the fetched data
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData); // After 2 seconds, it will log: Data fetched from server

//$ 🔑 Short Summary
//@ Callback Function → a function passed as an argument to another function and called after some operation is completed.

//////////////////////////////////////////////////////////////////////////////////!
//# Pass by Value vs Pass by Reference
//? Primitive types (number, string, boolean, null, undefined) pass by value, মানে তাদের value copy হয়।
//? Non-primitive types (object, array, function) pass by reference, মানে তাদের reference copy হয়।

//? Pass by Value
let a = 10;
let b = a; // b gets a copy of a's value
b = 20; // changing b does not affect a
console.log(a); // 10
console.log(b); // 20

//? Pass by Reference
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 gets a reference to the same object
obj2.name = "Bob"; // changing obj2's name changes obj1's name too
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob

//$ 🔑 Short Summary
//@ Pass by Value → primitive types are copied by value
//@ Pass by Reference → non-primitive types are copied by reference (reference to the same object)

//////////////////////////////////////////////////////////////////////////////////!

//# Arguments
//? Arguments হলো একটি array-like object যা function এর ভিতরে automatically available থাকে এবং function এ pass করা সব arguments কে represent করে।
//? Arguments object এর মধ্যে সব arguments indexed form এ থাকে এবং length property থাকে।
//? Arguments object array-like হলেও এটা আসলে একটি real array নয়, তাই এর মধ্যে array methods যেমন push, pop ইত্যাদি কাজ করে না।
//? Arguments object মূলত ES5 এর আগে JavaScript এ variable number of arguments handle করার জন্য ব্যবহৃত হত, কিন্তু এখন আমরা rest parameters (…args) ব্যবহার করে একই কাজ করতে পারি।
//? Arguments object এর কিছু quirks আছে, যেমন এটা arrow functions এ available হয় না এবং strict mode এ এর কিছু behavior different হতে পারে।
//? Arguments object এর পরিবর্তে rest parameters (…args) ব্যবহার করা এখন recommended, কারণ rest parameters আসলে একটি real array হয় এবং arguments এর মতো quirks থাকে না।
//? Rest parameters ব্যবহার করলে আমরা function এর ভিতরে arguments কে আরও সহজে handle করতে পারি এবং array methods ব্যবহার করতে পারি।

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]; // arguments[i] দিয়ে প্রতিটি argument access করা হয়
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6

//$ 🔑 Short Summary
//@ Arguments → an array-like object available inside functions that contains all the arguments passed to the function.

//////////////////////////////////////////////////////////////////////////////////!
