import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

export default function Dad() {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex ">
        <Myself />
        <Brother />
        <Sister />
      </section>
    </div>
  );
}
