import useInputFields from "../hooks/useInputFields";

export default function HookForm() {
  const [name, setName] = useInputFields("");
  const [email, setEmail] = useInputFields("");
  const [password, setPassword] = useInputFields("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form submitted");
    console.log("formdata -", name, email, password);
  };

  return (
    <div>
      <h1>Hook Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          onChange={setName}
          type="text"
          name="name"
          placeholder="write your name"
        />
        <br />
        <input
          defaultValue={email}
          onChange={setEmail}
          type="email"
          name="email"
          id=""
          placeholder="write your email"
        />
        <br />
        <input
          defaultValue={password}
          onChange={setPassword}
          type="password"
          name="password"
          id=""
          placeholder="write your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
