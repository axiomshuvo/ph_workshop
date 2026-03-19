// const name = "Bangladesh";

// // error asbe -> can not Reassignment constant variable
// // const name = "singapore ";

// | Feature   | var      | let       | const     |
// | --------- | -------- | --------- | --------- |
// | Scope     | Function | Block     | Block     |
// | Reassign  | ✅        | ✅         | ❌         |
// | Redeclare | ✅        | ❌         | ❌         |
// | Hoisting  | yes      | yes (TDZ) | yes (TDZ) |
// | Modern JS | ❌ rarely | ✅         | ✅         |

// ***Temporal Dead Zone (TDZ)।

// usually follow:

// const → default
// let → when value changes
// var → avoid

// ✅ Summary

// var → old, function scoped

// let → block scoped, reassign allowed

// const → block scoped, no reassignment

// # Default Param
// -------------------

function add(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

add(10); // return -> 10 undefined NaN

// @ for avoid this kind problem use default param value , now return 10 0 10

function fullName(first, last = "") {
  const name = first + " " + last;
  console.log(name);
}

fullName("kamruzzam"); // kamruzzam undefined without default value

// add default value empty string

// # Template Literals [ but sometimes call template string ] - using backtick and include dynamic value/ l into the string.

const loo = ``;

//  $ ✅ Correct terminology
// @  ` ` → Backtick
// @ `Hello ${name}` → Template Literal

// # Arrow Function

// function declaration:
//$ Function সরাসরি function keyword দিয়ে declare করা হয়।
//$ এটি hoisted হয়।
//$ তাই declaration-এর আগেও call করা যায়।

function name(param1, param2) {
  return param1 + param2;
}

// @ function expression -
//$ Function একটি variable এর মধ্যে assign করা হয়েছে
//$ এটাকে বলা হয় function expression

const add2 = function (num1, num2) {
  return num1 + num2;
};

// ! now arrow ->
//$     Arrow function-এ single expression হলে return লিখতে হয় না।
//$     Multiple Lines হলে {} লাগবে and return use kora lagbe
//$     One Parameter হলে () optional
//$     No Parameter হলে () required

const newAdd = (param1, param2) => param1 + param2;

//@ Quick Comparison
//? | Type                      | Example                      | Name              |
//? | ------------------------- | ---------------------------- | ----------------- |
//? | Normal Function           | `function add(){}`           | named             |
//? | Arrow Function            | `const add = () => {}`       | usually anonymous |
//? | Named Function Expression | `const x = function sum(){}` | sum               |
//? | Anonymous Function        | `function(){}`               | none              |

//@ Visual Relationship
//? Function
//? │
//? ├── Function Declaration
//? │     └── Named
//? │
//? ├── Function Expression
//? │     ├── Named Function Expression
//? │     └── Anonymous Function
//? │
//? └── Arrow Function
//?       └── usually Anonymous

//# ✅ Simple way to remember

//@ Normal Function → traditional function
//? Arrow Function → modern short syntax
//$ Named Function → function has a name
//! Anonymous Function → function has no name

//# Spread Operator
// @ Spread মানে: ➡️ array / object এর elements আলাদা করে expand করা

const max = Math.max(3, 3, 5, 6, 7, 9, 2, 3, 1);

console.log(max);

const numbers = [3, 4, 5, 2, 3, 5, 1, 2, 7, 0];

const max2 = Math.max(numbers);

console.log(max2); // return naN - it gives array to the math.max method
//? Spread Operator (...)
//? Spread মানে:
//? ➡️ array / object এর elements আলাদা করে expand করা

const max3 = Math.max(...numbers);

console.log(numbers);
console.log(...numbers); //Array elements spread হয়ে arguments হয়ে গেছে
console.log(max3);

//! Array copy
const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];
arr2.push(4);
arr3.push(5);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1);

//! Merge arrays

const a = [11, 22];
const b = [32, 34];

const merged = [...a, ...b];

console.log(merged);

//! Copy object

const user = { name: "Alex" };

const newUser = { ...user, age: 30 };

console.log(newUser);

// # Rest Operator (...)

// @ Rest মানে: ➡️ multiple values collect করে array বানানো

function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4); // [1,2,3,4]

//? এখানে rest operator arguments collect করছে।

//! Function parameters collect করা
function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

add(1, 2, 3); // 6 because [reduce() array এর সব element নিয়ে একটা single value তৈরি করে]

//! Array destructuring
const arr = [1, 2, 3, 4];

const [first, ...rest] = arr;

console.log(first); //1
console.log(rest); // [2,3,4]

//! Object destructuring
const louser = {
  fname: "Alex",
  age: 30,
  country: "USA",
};

const { fname, ...rest1 } = louser;

console.log(rest1); // {age:30, country:"USA"}

//? | Feature   | Spread Operator                  | Rest Operator                      |
//@ | --------- | -------------------------------- | ---------------------------------- |
//@ | Purpose   | Expand values                    | Collect values                     |
//@ | Direction | Array → elements                 | Elements → array                   |
//@ | Use place | Function call, array/object copy | Function parameters, destructuring |
//@ | Result    | Separate values                  | Array/object                       |

//! Visual Understanding
//? Spread
//@ [1,2,3]
//@    ↓
//@ 1,2,3

//? Rest
//@ 1,2,3
//@   ↓
//@ [1,2,3]

//? ✅ Summary

//? ... in function call / array copy → Spread

//? ... in function parameter / destructuring → Rest

//# Array Destructuring

//? Array destructuring index/position অনুযায়ী value নেয়
// normal way
const numsMol22 = [10, 20, 30];

const aol1 = numsMol22[0];
const ol2 = numsMol22[1];
const col2 = numsMol22[2];

console.log(aol1, ol2, col2);

//@ Destructuring way
const omrer = [10, 20, 30];

const [ad, bc, cd] = omrer;

console.log(ad, bc, cd); // 10 20 30

//? Array destructuring order dependent
//? Skip value
//? মাঝের value skip করতে চাইলে comma ব্যবহার করা যায়।
const numsormla = [10, 20, 30];

const [firsterst, , thirdlora] = numsormla;

console.log(firsterst); //10
console.log(thirdlora); //30

//? Default value
//? যদি value না থাকে, default দেওয়া যায়।

const nums22 = [10];

const [awer, bwer = 50] = nums22;

console.log(awer); //10
console.log(bwer); //50

//@ Rest operator - Remaining values collect করতে ... use kora hoy

const nums1123 = [1, 2, 3, 4, 5];

const [firstwe, secondwer, ...res3t] = nums1123;

console.log(firstwe); //1
console.log(secondwer); //2
console.log(res3t); //[3,4,5]

//# Object Destructuring
//? Object destructuring property name অনুযায়ী value নেয় (order matter করে না) . below normal example :-
const user0921 = {
  name: "John",
  age: 30,
  city: "London",
};

const nameert = user0921.name;
const agewer = user0921.age;

//@ Destructuring way
const userlo33 = {
  name: "John",
  age: 30,
  city: "London",
};

const { name, age, city } = userlo33;

console.log(name, age, city); // John 30 London

//@ Rename variable
//? Property name change করে variable বানানো যায়।

const user = {
  name: "John",
  age: 30,
};

const { name: userName, age: userAge } = user;

console.log(userName); //name → userName
console.log(userAge); // age → userAge

//@ Rest operator
//? Remaining properties collect করা যায়।

const user = {
  name: "John",
  age: 30,
  city: "London",
};

const { name, ...rest } = user;

console.log(name); //{name:"John"}
console.log(rest); //{age:30, city:"London"}

//@ Function Parameter Destructuring
function printUser({ name, age }) {
  console.log(name, age);
}

const user = {
  name: "John",
  age: 30,
};

printUser(user);

//? এখানে function parameter এ সরাসরি destructuring হয়েছে

//@ Swap variable (very useful trick)

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); //10
console.log(b); //5

//@ | Array Destructuring     | Object Destructuring            |
//! | ----------------------- | ------------------------------- |
//? | index অনুযায়ী value নেয় | property name অনুযায়ী value নেয় |
//? | order important         | order important না              |
//? | `[]` use হয়             | `{}` use হয়                     |

//@ Keys Values

const king = { name: "mufasa", age: 55, kingdom: "pride island" };
const keys = Object.keys(king); // [name,age,kingdom]
const keys = Object.values(king); // ["mufasa",55,"pride island"]

const entries = Object.keys(king);
// [ [name: "mufasa"], [age: 55], [kingdom: "pride island"] ] - return multidimensional array

//@ Freeze
const king = { name: "mufasa", age: 55, kingdom: "pride island" };
delete king.age;
console.log(king); // { name: "mufasa", kingdom: "pride island" }

Object.freeze(king);
delete king.age;
console.log(king);
// { name: "mufasa", age: 55, kingdom: "pride island" } - don't able to add, remove, modify the object properties

Object.seal(king); // only modify - not delete or add new property

//# Nested Object , Dot vs Bracket and Option chaining

//? Nested Object মানে একটি object এর ভিতরে আরেকটি object থাকা

const user = {
  name: "Shuvo",
  age: 30,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

//@ এখানে:
//? user → main object
//? address → nested object

//@ Dot Notation (.)
//? Object property access করার সবচেয়ে common method
object.property;
console.log(user.name); // Shuvo
console.log(user.address.city); // Dhaka

//! Dot notation use করা হয় যখন property name fixed থাকে

//@ Bracket Notation ([])
//? Dynamic property access করার জন্য ব্যবহার করা হয়

object["property"];
console.log(user["name"]); // Shuvo
console.log(user["address"]["city"]); // Dhaka

//! Dynamic Example

const key = "name";
console.log(user[key]); // Shuvo

//! এটা Dot notation দিয়ে possible না ,
user.key;
//!  কারণ এটা "key" property খুঁজবে

const employee = {name:"John doe",1:"desk one", "home-address":"dhaka", position: "Software Developer"}

console.log(employee.1); // ❌ systex error - code don't run
console.log(employee[1]) // desk one 

console.log(employee."home-address") // through error
console.log(employee["home-address"]) // dhaka


//$ Dot vs Bracket (Comparison)

//@ | Feature      | Dot        | Bracket       |
//? | ------------ | ---------- | ------------- |
//? | Syntax       | `obj.name` | `obj["name"]` |
//? | Dynamic key  | ❌          | ✅             |
//? | Simple       | ✅          | একটু verbose  |
//? | Variable key | ❌          | ✅             |

//$ Example
const key = "city";

user.address[key]; // correct
user.address.key; // wrong

//! Problem Without Optional Chaining
const user = {
  name: "Shuvo",
};

console.log(user.address.city);
//! ❌ Error - Cannot read properties of undefined
//? কারণ:
//? user.address = undefined

//# Optional Chaining (?.)
//? Optional chaining safe ভাবে property access করে
// syntax
object?.property;

console.log(user.address?.city); // undefined but ❌ Error হবে না।

//@ Nested Optional Chaining

const user = {
  name: "Shuvo",
  address: {
    city: "Dhaka",
  },
};

console.log(user?.address?.city); // Dhaka

//@ Optional Chaining with Array

const users = [{ name: "A" }, { name: "B" }];

console.log(users?.[0]?.name); // A

//! Real Example (API Data)

const apiData = {
  user: {
    profile: {
      name: "Rahim",
    },
  },
};

console.log(apiData.user?.profile?.name);

//! Summary
//? | Concept           | Meaning                 |
// | ----------------- | ----------------------- |
//@ | Nested Object     | Object এর ভিতরে object  |
//@| Dot notation      | `obj.name`              |
//@ | Bracket notation  | `obj["name"]`           |
//@ | Optional chaining | Safe access `obj?.prop` |

//$ All Example All Together

const user = {
  name: "Shuvo",
  address: {
    city: "Dhaka",
  },
};

console.log(user.address.city); // dot
console.log(user["address"]["city"]); // bracket
console.log(user.address?.city); // optional chaining


//@ For in Loop - object 

for ( const key in user){
        console.log(key); // name address undefined
}

//@ for of loop - array & string 
