import Friend from "./Friend";

export default function CousinSis({ name }) {
  // const [money, setMoney] = use(MoneyContext);

  return (
    <>
      <div>
        <h3> {name}</h3>
        {name === "Alice" && <Friend />}
      </div>
    </>
  );
}
