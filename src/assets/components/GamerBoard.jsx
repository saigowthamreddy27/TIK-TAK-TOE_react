import { useState } from "react";
const intitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export default function GamerBoard({selectActivePlayer,turns}) {

  const gameBoard=intitialGameBoard

  for(const turn of turns){
    console.log(turn,'turn')
    const {square,player}=turn
    console.log(square,'square')
    console.log(player,'player')
    const {row,col}=square
    gameBoard[row][col]=player
  }

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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectActivePlayer(rowIndex, colIndex)}>
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
