import React from "react";

export default function OnboardNewIndex2() {
  return (
    <div style={{ padding: "20px" }}>

      {/* ✅ TOP: 3 Text Areas */}
      <div 
        style={{ 
          display: "flex", 
          gap: "120px",           // space between text areas
          marginBottom: "50px",
          marginLeft:"170px", 
          marginRight:"200px",
          marginTop:"20px"  // space below text areas
        }}
      >
        <textarea placeholder="Text Area 1" rows="4" className="form-control" />
        <textarea placeholder="Text Area 2" rows="4" className="form-control" />
        <textarea placeholder="Text Area 3" rows="4" className="form-control" />
      </div>

      {/* ✅ BIG TABLE */}
      <div style={{ marginBottom: "40px",marginLeft:"90px" }}>
        <h4 style={{ marginBottom: "15px",textAlign: "center"  }}>Main Table</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>c</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>val1</td>
              <td>val2</td>
              <td>val3</td>
            </tr>
            <tr>
              <td>val4</td>
              <td>val5</td>
              <td>val6</td>
            </tr>
            <tr>
              <td>val7</td>
              <td>val8</td>
              <td>val9</td>
            </tr>
            <tr>
              <td>val10</td>
              <td>val11</td>
              <td>val12</td>
            </tr>
            <tr>
              <td>val13</td>
              <td>val14</td>
              <td>val15</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ TWO SMALL TABLES */}
      <div 
        style={{ 
          display: "flex", 
          gap: "40px",           // bigger gap between the two small tables
          marginBottom: "30px",
          marginLeft:"90px"   // space below small tables
        }}
      >

        {/* Small Table 1 */}
        <div style={{ flex: 1 }}>
          <h5 style={{ marginBottom: "10px",textAlign: "center"  }}>Small Table 1</h5>
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>x</th>
                <th>y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Small Table 2 */}
        <div style={{ flex: 1 }}>
          <h5 style={{ marginBottom: "10px", textAlign: "center" }}>Small Table 2</h5>
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>p</th>
                <th>q</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
