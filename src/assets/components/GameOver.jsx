export default function GameOver({ winner, handleRestart, name }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} {name} won!</p>}
      {!winner && <p>Has Draw</p>}
      <p>
        <button onClick={handleRestart} >Rematch</button>
      </p>
    </div>
  );
}
