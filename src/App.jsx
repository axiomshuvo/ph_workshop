import "./App.css";

import Spa from "./components/Spa";
// import Chart from "./components/chart/Chart";

// const marksPromise = axios.get("../public/marksData.json");

export default function App() {
  return (
    <>
      <h1>Line Chart</h1>
      {/* <Chart /> */}
      {/* <Suspense fallback={<p>Loacing ...</p>}>
        <Axios marksPromise={marksPromise}></Axios>
      </Suspense> */}
      <Spa />
    </>
  );
}
