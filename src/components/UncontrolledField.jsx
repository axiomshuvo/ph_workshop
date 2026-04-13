import { useRef } from "react";

export default function UncontrolledField() {
  const mailref = useRef("");
  const passref = useRef("");

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();

    const mailrefValue = mailref.current.value;
    const passrefValue = passref.current.value;
    console.log(mailrefValue, passrefValue);
    //     const formData = new FormData(e.target);
    //     console.log(formData);
    //     const email = formData.get("email");
    //     const password = formData.get("password");
    //     console.log({ email, password });
  };

  return (
    <div>
      <h1>Uncontrolled Field</h1>
      <form action="" onSubmit={handleUncontrolledSubmit}>
        <input type="email" name="email" id="" ref={mailref} />
        <br />
        <input type="password" name="password" id="" ref={passref} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
