import { use } from "react";
import CousinBro from "./CousinBro";
import CousinSis from "./CousinSis";
import { MoneyContext } from "./FamilyTree";

export default function Aunt() {
  const [money, setMoney] = use(MoneyContext);
  const handleMoney = () => {
    setMoney(money + 5000);
  };

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <CousinBro name="Bob" />
        <CousinSis name="Alice" />
      </section>
      <button onClick={handleMoney}>add 5000tk</button>
    </div>
  );
}
