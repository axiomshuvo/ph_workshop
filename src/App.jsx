import { Suspense } from "react";
import "./App.css";
import Actor from "./components/Actors";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Singer from "./components/Singer";
import Todo from "./components/Todo";
import Users from "./components/Users";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const allPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const allPostData = allPost();

function App() {
  const actors = ["bappa raj", "omar sunny", "slaan shah", "jashim", "anwar"];

  const singers = [
    { id: 1, name: "Dr Mahfuz", age: 68, genre: "classical" },
    { id: 2, name: "Shuvro Dev", age: 55, genre: "Mordern" },
    { id: 3, name: "Tahsan", age: 45, genre: "Mordern,Band" },
    { id: 4, name: "Aybub Baccu", age: 60, genre: "Rock Band" },
  ];

  function handleClick() {
    alert(" i am clicked");
  }

  return (
    <>
      <h1>Learning List</h1>

      <Suspense fallback={<p>Post are comming ...</p>}>
        <Posts allPostData={allPostData}></Posts>
      </Suspense>
      <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <Counter />
      <br />
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <Todo task="learn React " isDone={true} />
      <Todo task="learn Next " isDone={false} />
      <Todo task="learn MongoDb " isDone={false} />

      {actors.map((actor, index) => (
        <Actor key={index} name={actor} />
      ))}

      {singers.map((singer) => (
        <Singer
          key={singer.id}
          id={singer.id}
          name={singer.name}
          age={singer.age}
          genre={singer.genre}
        />
      ))}
    </>
  );
}

export default App;
