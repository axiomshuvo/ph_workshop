import { createContext, useState } from "react";
import "../styles/familytree.css";
import Grandpa from "./Grandpa";

export const AssetContext = createContext("");

export const MoneyContext = createContext(0);

export default function FamilyTree() {
  const asset = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>

      {/* <AssetContext.Provider value={asset}>
        <Grandpa />
      </AssetContext.Provider> */}
      <h4>Total Family Money: ${money}</h4>

      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={asset}>
          <Grandpa />
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
}

/*
 *  Context API  করতে হলে প্রথমে createContext() ফাংশন ব্যবহার করে একটি কনটেক্সট তৈরি করতে হবে।
 *  তারপর সেই কনটেক্সটের Provider কম্পোনেন্ট ব্যবহার করে ডাটা প্রদান করতে হবে।
 *  যেকোনো কম্পোনেন্ট যা সেই ডাটা ব্যবহার করতে চায়, সেখানে useContext() হুক ব্যবহার করে কনটেক্সট থেকে ডাটা নিতে হবে।
 */
