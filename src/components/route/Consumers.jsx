import { use } from "react";
// import { NavLink } from "react-router";

export default function Consumers({ consumersPromise }) {
  const consumers = use(consumersPromise);
  const style = {
    border: "1px solid yellow",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div>
      <h1>Consumers List</h1>
      <ul>
        {consumers.map((consumer) => (
          <li style={style} key={consumer.id}>
            <a href={`/consumers/${consumer.id}`}>{consumer.name}</a>
            {/* <NavLink to={`/consumers/${consumer.id}`}>{consumer.name}</NavLink> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
