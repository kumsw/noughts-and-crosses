import React from "react";
import Board from "../Board";

function Square({ handleClick, value }) {
  return (
    <div>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
