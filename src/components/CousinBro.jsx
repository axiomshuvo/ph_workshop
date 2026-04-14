import Friend from "./Friend";
import Special from "./Special";

export default function CousinBro({ name }) {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Bob" && <Special />}
      {name === "John" && <Friend />}
    </div>
  );
}
