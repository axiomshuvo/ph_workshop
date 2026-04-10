export default function FormAction() {
  const handleFormAction = (formdata) => {
    console.log(formdata);
    console.log(formdata.get("name"));
    console.log(formdata.get("email"));
  };

  return (
    <div>
      <h1>Form Action</h1>
      <form action={handleFormAction}>
        <input name="name" type="text" placeholder="Enter your name" />
        <br />
        <input name="email" type="email" placeholder="Enter your email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
