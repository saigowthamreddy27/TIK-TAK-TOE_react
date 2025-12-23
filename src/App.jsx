import { useState } from "react";
import Player from "./assets/components/Player.jsx";
import GamerBoard from "./assets/components/GamerBoard.jsx";

function App() {
  const [turns, setTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function togglePlayer(rowIndex, colIndex) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    console.log(activePlayer);
    console.log(rowIndex, "hello", colIndex);
    setTurns((preTurns) => {
      let currentPlayer = "X";
      if (turns.length > 0 && preTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const currentTurn = {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      };
      return [currentTurn, ...preTurns];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
          />
        </ol>
        <GamerBoard selectActivePlayer={togglePlayer} turns={turns} />
      </div>
    </main>
  );
}

export default App;
