import { useLoaderData } from "react-router";
import Customer from "./Customer";

export default function Customers() {
  const customers = useLoaderData();
  console.log(customers);

  return (
    <div>
      <h1>Customers List</h1>
      <ul>
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer}></Customer>
        ))}
      </ul>
    </div>
  );
}
