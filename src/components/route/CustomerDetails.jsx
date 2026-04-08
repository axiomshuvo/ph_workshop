import { use } from "react";

export default function CustomerDetails({ userPromise }) {
  const customerDetails = use(userPromise);
  console.log(customerDetails);
  return (
    <div>
      <p>Email: {customerDetails.email}</p>
      <p>Website: {customerDetails.website}</p>
      <p>
        Address: {customerDetails.address.street},{" "}
        {customerDetails.address.suite}, {customerDetails.address.city},{" "}
        {customerDetails.address.zipcode}
      </p>
      <p>Company: {customerDetails.company.name}</p>
    </div>
  );
}
