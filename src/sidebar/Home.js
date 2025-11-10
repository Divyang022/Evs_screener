import Cards from "./Cards"
import preBuilt from "../components/images/pre-built.webp";
import customImg from "../components/images/custom-filter.webp";

export default function Home() {
  return (
    <div className="d-flex flex-row mb-3 justify-content-evenly cards-parent">
      <Cards title="Pre-built Screen" image={preBuilt}></Cards>
      <Cards title="Create custom filter" image={customImg}></Cards>
    </div>
  );
}
