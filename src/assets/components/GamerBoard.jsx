import { useState } from "react";



export default function GamerBoard({selectActivePlayer,board}) {

 
  // const [gameBoard, setGameBoard] = useState(intitialGameBoard);

  // function handleGameBoard(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
  //     updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol
  //     return updatedGameBoard
  //   });
  //   selectActivePlayer()
  //   console.log(rowIndex, colIndex);
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectActivePlayer(rowIndex, colIndex)} disabled={playerSymbol !==null} >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
