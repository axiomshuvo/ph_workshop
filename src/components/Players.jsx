import { use } from "react";
// import SinglePlayer from "./SinglePlayer";

export default function Players({ playersPromise }) {
  // console.log(playersPromise);
  const data = use(playersPromise);
  console.log(data);
  return (
    <>
      <div>
        {data.length} Players
        {/* <SinglePlayer /> */}
      </div>
    </>
  );
}
