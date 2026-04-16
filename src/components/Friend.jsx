import { use } from "react";
import { MoneyContext } from "./FamilyTree";

export default function Friend() {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h3>Friend</h3>
      <p>Money: {money}</p>
    </div>
  );
}
