import { useState } from "react";

export default function Player({ name, symbol, isActivePlayer,updatedPlayerName}) {
  const [playerName, setPlayername] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function editPlayer() {
    setIsEditing((isEditing) => !isEditing);
    updatedPlayerName(symbol,playerName)
  }

  function editName(event) {
    console.log(event.target.value);
    setPlayername(event.target.value);
  }
  let GamerName = <span className="player-name">{playerName}</span>;
  return (
    <li className={isActivePlayer?'active':undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={editName}
          ></input>
        ) : (
          GamerName
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
