import { Suspense, useState } from "react";
import CustomerDetails from "./CustomerDetails";

export default function Customer({ customer }) {
  const { id, name, phone } = customer;

  const [showinfo, setShowinfo] = useState(false);

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());
  // loader use korle json e convert kora lage na , but prmoise use korle json e convert kora lage

  return (
    <div
      key={id}
      style={{ border: "1px solid green", margin: "10px", padding: "10px" }}
    >
      <h2>{name}</h2>
      <p>Phone: {phone}</p>

      <button
        style={{
          background: "transparent",
          border: "1px solid yellow",
          cursor: "pointer",
        }}
        onClick={() => setShowinfo(!showinfo)}
      >
        {" "}
        {showinfo ? "Hide" : "Show"} Details
      </button>
      {showinfo && (
        // <div>
        //   <p>Email: {email}</p>
        //   <p>Website: {website}</p>
        //   <p>
        //     Address: {customer.address.street}, {customer.address.suite},{" "}
        //     {customer.address.city}, {customer.address.zipcode}
        //   </p>
        //   <p>Company: {customer.company.name}</p>
        // </div>
        <Suspense fallback={<div>Loading details...</div>}>
          <CustomerDetails userPromise={userPromise} />
        </Suspense>
      )}
    </div>
  );
}
