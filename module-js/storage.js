console.log("conneted");

//# localStorage কী?
//? localStorage হলো browser-এর একটি Web Storage API, যেখানে তুমি data save করতে পারো permanently (user clear না করা পর্যন্ত থাকে)

//@ 👉 Key points:

//? Permanent storage
//? 5–10MB limit
//? Only string

//@ 👉 Data থাকে:

//? Browser close করলে থাকে ✅
//? Page refresh করলে থাকে ✅
//? Same domain-এ accessible ✅

//@ কোথায় use হয়?

//? Real-world use:
//? Dark mode save
//? User settings
//? Cart data (basic e-commerce)
//? Token (⚠️ careful!)
//? Form data auto-fill

//@ Basic Syntax

//$ 🔸 Data Save করা
localStorage.setItem("name", "Pradipta");

//$ 🔸 Data Get করা
const name = localStorage.getItem("name");

// console.log(name);
//$ 🔸 Data Delete করা
localStorage.removeItem("name");

//$ 🔸 সব clear করা
localStorage.clear();

//@ Object/Array store করতে হলে
//? JSON.stringify দিয়ে স্ট্রিং এ covert করে নিতে হবে ।

//! Save (JSON.stringify) -> covert to string
const user = {
  name: "Pradipta",
  age: 22,
};

localStorage.setItem("user", JSON.stringify(user)); // object কে sting এ convert করে নিতে হবে

//! Get (JSON.parse) - string to object

const userData = JSON.parse(localStorage.getItem("user")); // default string দেয় , তাই string থেকে object
console.log(userData.name);

//!  Summary
//?  👉 stringify = string বানায়
//? 👉 parse = original structure ফেরত দেয়
///////////////////////////

const addNumberToLS = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};

const getNumbers = () => {
  const number = localStorage.getItem("number");
  console.log("from save local storage", number);
};

const setObject = () => {
  let customer = {
    name: "nasir",
    products: 3,
    price: 75,
  };
  customer = JSON.stringify(customer);

  localStorage.setItem("customer", customer);
};

const readObject = () => {
  const customer = JSON.parse(localStorage.getItem("customer"));
  console.log(customer);
};
