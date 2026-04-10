import "./App.css";
import ControlledField from "./components/ControlledField";
import FormAction from "./components/FormAction";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <>
      <h1>React Form using React Route</h1>
      <SimpleForm />
      <br />
      <FormAction />
      <br />
      <ControlledField />
    </>
  );
}

export default App;
