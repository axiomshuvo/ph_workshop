//# props কি ?
//@` React-এ props (properties) হলো component-এর মধ্যে data pass করার primary mechanism — বিশেষ করে parent → child direction-এ।
//? 👉 function-এর parameter যেমন থাকে, component-এর জন্য props ঠিক সেইরকম।

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//$ এখানে:
//? props = object
//? props.name = parent থেকে আসা data

//@ Parent → Child Data Passing
function App() {
  return <Welcome name="Pradipta" />;
}
//$ 👉 এখানে:
//? name="Pradipta" → props হিসেবে child-এ যাচ্ছে
//? child-এ access: props.name

//! 🔹 Props is Read-Only (Very Important)
//@ React rule:
//? ❌ props modify করা যায় না
//? ✅ শুধু read/use করা যায়

props.name = "New Name"; // ❌ ভুল

//@ 🔹 Destructuring (Clean Way)

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
//? 🔹 Multiple Props Example
function User({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

function App() {
  return <User name="Pradipta" age={21} />;
}

//@ 🔹 Props Types
//$ 1. String
<Component title="Hello" />
//$ 2. Number
<Component count={5} />
//$ 3. Boolean
<Component isLoggedIn={true} />
//$ 4. Array
<Component items={["a", "b", "c"]} />
//$ 5. Object
<Component user={{ name: "Pradipta", age: 21 }} />
//$ 6. Function (VERY IMPORTANT 🔥)
function App() {
  const handleClick = () => alert("Clicked!");

  return <Button onClick={handleClick} />;
}
//! 🔹 Props + Function (Real Use Case)
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>; //? 👉 Parent controls behavior of child
}

//? 🔹 Default Props
function Welcome({ name = "Guest" }) {  // name value 
  return <h1>Hello, {name}</h1>;
}

//! 🔹 Key Takeaways
//@ Props = data passing system (parent → child)
//@ Props = immutable (read-only)
//@ Props = object
//@ Destructuring = clean code
//@ Function props = event handling
//@ children = reusable layout

//? 🔥 Real-Life Analogy
//# 👉 props = function argument
//# 👉 component = function

