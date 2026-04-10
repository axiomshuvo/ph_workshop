import { useState } from "react";

export default function ControlledField() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);
    //     const email = formData.get("email");
    //     const password = formData.get("password");
    //     console.log({ email, password });
  };
  const [pass, setPass] = useState("");

  const handlePassOnChage = (e) => {
    console.log(e.target.value);
    //     setPass(e.target.value);
  };

  return (
    <div>
      <h1>Controlled Field</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Type Your Email"
          id=""
          required
        />
        <br />
        <input
          onChange={handlePassOnChage}
          type="password"
          name="password"
          defaultValue={pass}
          placeholder="Enter your Password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
