import React from "react";
import shape2 from "../../../assets/Home/shape-bg.png";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={shape2}
          // src={require("../../../assets/Home/shape-bg.png").default}
          alt="curvy lines footer"
        />
      </div>
    </div>
  );
}
