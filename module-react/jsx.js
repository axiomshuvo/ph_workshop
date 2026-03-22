//# 🔹 JSX কী?

//@ JSX (JavaScript XML) হলো এমন একটা syntax যেটা React-এ ব্যবহার করা হয় UI বানানোর জন্য।
//? 👉 দেখতে HTML এর মতো
//? 👉 কিন্তু আসলে JavaScript এর ভেতরে কাজ করে

//! Example দেখো

const element = <h1>Hello World</h1>;
//? এটা আসলে ভিতরে ভিতরে convert হয়:
React.createElement("h1", null, "Hello World");

//? 👉 তাই JSX = HTML না, এটা JavaScript এর special syntax

//! কেন JSX ব্যবহার করি?
//? কোড সহজে পড়া যায়
//? UI দেখে বুঝা যায়
//? logic + design একসাথে রাখা যায়

//@ JSX এর Important Rules
//? 1. একটা parent element লাগবে

return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);

//@ 2. class না, className
<div className="box"></div>;

//@ 3. JavaScript লিখতে {} ব্যবহার করো

const name = "Pradipta";
return <h1>Hello {name}</h1>;

//@ 4. Tag বন্ধ করতে হবে
<img src="img.jpg" />
<input />


//@ 5. Style object আকারে দিতে হয়

<div style={{ color: "red", fontSize: "20px" }}>
  Text
</div>


//? Condition ব্যবহার
const isLogin = true;

return (
  <div>
    {isLogin ? <p>Welcome</p> : <p>Login first</p>}
  </div>
);

//? List show করা
const fruits = ["Apple", "Banana", "Mango"];

return (
  <ul>
    {fruits.map((fruit, i) => (
      <li key={i}>{fruit}</li>
    ))}
  </ul>
);

//! 👉 JSX সরাসরি browser বুঝে না
//! 👉 আগে এটা JavaScript এ convert হয় (Babel দিয়ে)

