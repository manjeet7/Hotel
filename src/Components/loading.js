import React from "react";
import loadinggif from "../images/gif/loading-arrow.gif";
function loading() {
  return (
    <div className="loading">
      <h4>Room data loading...</h4>
      <img src={loadinggif} alt="harara" />
    </div>
  );
}

export default loading;
