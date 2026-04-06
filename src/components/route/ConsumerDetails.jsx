import { useLoaderData } from "react-router";

export default function ConsumerDetails({}) {
  const consumers = useLoaderData();
  console.log(consumers);
  return (
    <div>
      <h2>{consumers.name}</h2>
      <h4>{consumers.email}</h4>
      <h6>{consumers.phone}</h6>
      <h6>{consumers.website} </h6>

      <address>
        {consumers.address.street} <br />
        {consumers.address.suite} <br />
        {consumers.address.city} <br />
        {consumers.address.zipcode}
      </address>
    </div>
  );
}
