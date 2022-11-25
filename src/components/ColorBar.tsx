import React from "react";
import { calColor, calDiff, rgb2hex } from "../utils/cal";

const ColorBar = () => {
  //   const startDate = new Date("2019/12/28");
  //   const bar = () => {
  //     for(let i = 0; i < calDiff(startDate); i++){

  //     }
  //   };
  return (
    <div style={wrapper}>
      <div style={{ marginBottom: "5px" }}>year</div>
      <div style={bar} />
      <div style={flex}>
        <span>2019</span>
        <span>2022</span>
      </div>
      <div style={{ marginBottom: "30px" }} />
      <div style={{ marginBottom: "5px" }}>divergence</div>
      <div style={triangle}></div>
      <div style={flex}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default ColorBar;

const wrapper = {
  marginLeft: "50px",
  marginTop: "50px",
  width: "200px",
};

const bar = {
  height: "10px",
  background: "linear-gradient(to right, #7364b4, #ff6464)",
};

const flex = {
  display: "flex",
  justifyContent: "space-between",
};

const triangle = {
  borderTop: "20px solid transparent",
  borderRight: "200px solid #fff",
  borderBottom: "20px solid transparent",
};
