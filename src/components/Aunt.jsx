import CousinBro from "./CousinBro";
import CousinSis from "./CousinSis";

export default function Aunt() {
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <CousinBro name="Bob" />
        <CousinSis name="Alice" />
      </section>
    </div>
  );
}
