import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Cards from './Cards'
import building from "./images/building.jpg";
import bar from "./images/line-chart.png";
import gen_img from "./images/big-pic.png";

export default function MediaCoverage() {
  return (
    <div className="media-page">
      <div className="empty-page">
        <h2 style={{
          fontSize: 50,
          textAlign: "center"
        }}>Qubits</h2>
        <p style={{
          fontSize: 25,
          textAlign: "center"
        }}>Media coverage & insights from our experts</p>
      </div>
      <div className="d-flex flex-row justify-content-evenly">
        <Cards image = {building}></Cards>
        <Cards image = {bar}></Cards>
        <Cards image = {gen_img}></Cards>
      </div>
    </div>
  );
}
