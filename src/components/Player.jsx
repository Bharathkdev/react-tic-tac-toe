import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const editHandler = () => {
    setIsEditing((editing) => !editing); //this is recommended by React as state updates are not performed immediately
    if (isEditing) onSave(symbol, playerName);
  };
  const changeHandler = (event) => setPlayerName(event.target.value);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={changeHandler} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
