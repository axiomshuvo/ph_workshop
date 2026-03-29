import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/Players";

const fetchPlayers = async () => {
  const res = await fetch("/data.json"); // ✅ correct path
  return res.json();
};
function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Suspense
          fallback={
            <>
              <span className="loading loading-infinity text-primary"></span>
              <span className="loading loading-infinity text-secondary"></span>
              <span className="loading loading-infinity text-accent"></span>
              <span className="loading loading-infinity text-neutral"></span>
              <span className="loading loading-infinity text-info"></span>
              <span className="loading loading-infinity text-success"></span>
              <span className="loading loading-infinity text-warning"></span>
              <span className="loading loading-infinity text-error"></span>
            </>
          }
        >
          <Players playersPromise={playersPromise} />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
