import React from "react";
import IconComplete from "../Images/icon-complete.svg";
import "./Thanks.css";

function Thanks() {
  return (
    <div className="thanksbody">
      <img src={IconComplete} alt="iconComplete" />

      <p className="thanktext">thank you!</p>
      <p className="cardDetails">We've added your card details</p>
    </div>
  );
}

export default Thanks;
