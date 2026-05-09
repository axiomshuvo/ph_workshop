export default async function AddATask({ formData }) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const company = formData.get("company");
  const message = formData.get("message");

  console.log({ name, email, phone, company, message });

  return (
    <div>
      <h1>Task Added</h1>
    </div>
  );
}
