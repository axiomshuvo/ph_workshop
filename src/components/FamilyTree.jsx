import { createContext } from "react";
import "../styles/familytree.css";
import Grandpa from "./Grandpa";

export const AssetContext = createContext("");

export default function FamilyTree() {
  const asset = "diamond";
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>

      <AssetContext.Provider value={asset}>
        <Grandpa />
      </AssetContext.Provider>
    </div>
  );
}
