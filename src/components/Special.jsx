import { useContext } from "react";
import { AssetContext } from "./FamilyTree";

export default function Special({ name }) {
  const newAsset = useContext(AssetContext);
  console.log("Special component rendered with asset:", newAsset);
  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Asset: {newAsset}</p>
    </div>
  );
}
