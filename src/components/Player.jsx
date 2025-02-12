import { useState } from 'react'

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing ? false : true);
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditing) {
        playerName = <input type="text" required value={name} />
      
    }
  return (
    <li>
      <span className="player">
            {playerName}
            <span class="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
      
    </li>
  );
}