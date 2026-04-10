export default function SimpleForm() {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <input name="name" type="text" placeholder="Enter your name" />
        <br />
        <input name="email" type="email" placeholder="Enter your email" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
