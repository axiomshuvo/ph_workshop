import { use } from "react";

export default function Consumers({ consumersPromise }) {
  const consumers = use(consumersPromise);
  return (
    <div>
      <h1>Consumers List</h1>
      <ul>
        {consumers.map((consumer) => (
          <li key={consumer.id}>{consumer.name}</li>
        ))}
      </ul>
    </div>
  );
}
