import { useState } from "react";
import Player from "./assets/components/Player.jsx";
import GamerBoard from "./assets/components/GamerBoard.jsx";
import Log from "./assets/components/Log.jsx";
import { WINNING_COMBINATIONS } from "./assets/components/win.js";
import GameOver from "./assets/components/GameOver.jsx";

const intitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(preTurns) {
  let currentPlayer = "X";
  if (preTurns.length > 0 && preTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}


function App() {
const [playerName, setPlayerName] = useState({
  X: "Player 1",
  O: "Player 2"
});

  const [turns, setTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = derivedActivePlayer(turns);

  const gameBoard = [...intitialGameBoard.map((array) => [...array])];

  for (const turn of turns) {
    console.log(turn, "turn");
    const { square, player } = turn;
    console.log(square, "square");
    console.log(player, "player");
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    let secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    let thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const updatePlayerName = (symbol, playerName) => {
    setPlayerName((prePlayerName) => {
      return { ...prePlayerName, [symbol]: playerName };
    });
    console.log(symbol,playerName,"upadte")
  };

  const hasDraw = turns.length === 9 && !winner;

  function togglePlayer(rowIndex, colIndex) {
    //setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    console.log(activePlayer);
    console.log(rowIndex, "hello", colIndex);
    setTurns((preTurns) => {
      const currentTurn = {
        square: { row: rowIndex, col: colIndex },
        player: activePlayer,
      };
      return [currentTurn, ...preTurns];
    });
  }
  function handleRestart() {
    setTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
             updatePlayerName={updatePlayerName}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
            updatePlayerName={updatePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart} name={playerName[winner]} />
        )}
        <GamerBoard selectActivePlayer={togglePlayer} board={gameBoard} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;
