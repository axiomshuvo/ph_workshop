import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

export default function Grandpa() {
  return (
    <div>
      <h2>Grandpa</h2>
      <section className="flex flex-1">
        <Dad />
        <Uncle />
        <Aunt />
      </section>
    </div>
  );
}
