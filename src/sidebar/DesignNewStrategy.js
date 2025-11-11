import "./DesignNewStrategy.css";
import DialogBox from "./DialogBox";
import RadioButton from "./RadioButton";
import { useState } from "react";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="container">
      {/* Section 1 */}
      <div className="section section1">
          <RadioButton options={["Replicate Existing Strategy", "Create New Strategy"]} labelName={"strategyType"}></RadioButton>
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="section2">
          <RadioButton options={["Index", "Basket", "TWAPS/VWAPS"]} labelName={"assetType1"}></RadioButton>
        </div>
        <div className="section2">
          <RadioButton options={["Eq", "Eq Drv", "Rates", "Comm", "Multi Asset"]} labelName={"assetType2"}></RadioButton>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section section3">
        <div className="col">
          <div className="row">
            <label>Select Underlying Strategy:</label>
            <select>
              <option>Dropdown</option>
              <option>Strategy 1</option>
            </select>
          </div>

          <div className="row">
            <label>Sub Category:</label>
            <select>
              <option>Dropdown</option>
              <option>Sub 1</option>
            </select>
          </div>

          <div className="row">
            <label>Rebalance:</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <label>Basic Description:</label>
          <br />
          <input
            type="textarea"
            placeholder="Basic Description"
            style={{ height: "60px", width: "270px" }}
          />
          <br />
          <label style={{ marginTop: "10px" }}>
            holiday o calc holt tradg holiday
          </label>
        </div>
        <div className="col">
          <button className="btn" onClick={() => setDialogOpen(true)}>UI Editor</button>
          <DialogBox
            isOpen={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            title="Hello Vikash!"
          >
            <p>This is a simple dialog box in React.</p>
          </DialogBox>
        </div>
      </div>
    </div>
  );
}

export default App;