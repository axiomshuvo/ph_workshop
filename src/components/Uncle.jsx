import CousinBro from "./CousinBro";
import CousinSis from "./CousinSis";

export default function Uncle() {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <CousinBro name="John" />
        <CousinSis name="Jane" />
      </section>
    </div>
  );
}
