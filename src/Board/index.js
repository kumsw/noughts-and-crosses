import React, { useState } from "react";
// import Game from "../Game";
import Square from "../Square";

function Board() {
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(index) {
    const winner = calculateWinner(squares);
    if (winner) {
      alert("Winner!!!");
      return;
    }
    const newSquares = [...squares.slice()];
    newSquares[index] = isXTurn ? "👻" : "🎃";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <center>
        <h1>TIC TAC TOE</h1>
        <div className="grid">
          <div className="board-row">
            <Square handleClick={() => handleClick(0)} value={squares[0]} />
            <Square handleClick={() => handleClick(1)} value={squares[1]} />
            <Square handleClick={() => handleClick(2)} value={squares[2]} />
          </div>
          <div className="board-row">
            <Square handleClick={() => handleClick(3)} value={squares[3]} />
            <Square handleClick={() => handleClick(4)} value={squares[4]} />
            <Square handleClick={() => handleClick(5)} value={squares[5]} />
          </div>
          <div className="board-row">
            <Square handleClick={() => handleClick(6)} value={squares[6]} />
            <Square handleClick={() => handleClick(7)} value={squares[7]} />
            <Square handleClick={() => handleClick(8)} value={squares[8]} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default Board;
