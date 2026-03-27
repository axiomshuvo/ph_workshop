import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <h4> React practice Project</h4>
      <Suspense fallback={<p>World view are loading ...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
