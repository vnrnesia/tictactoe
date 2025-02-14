import { useState } from 'react'

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName); // Oyuncunun adını saklar ve başlangıç adı ile başlar.
    const [isEditing, setIsEditing] = useState(false); // Kullanıcının düzenleme modunda olup olmadığını anlar. False ile başlar yani düzenleme kapalıdır.

    function handleEditClick() {
        setIsEditing((editing) => !editing); // Butona basıldığında isEditing değeri truve veya false olarak değişir.
    }

    function handleChange(event) { 
        setPlayerName(event.target.value); // Kullanıcı input'a bir şey yazdığında playerName güncellenir.
    }

    let editablePlayerName;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    } else {
        editablePlayerName = <span className="player-name">{playerName}</span>;
    } // Eğer isEditing true ise, bir <input> kutusu gösterilir. (Kullanıcı adını değiştirebilir.)
    //Eğer isEditing false ise, oyuncunun adı sadece bir <span etiketi içinde gösterilir.

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li> // Eğer düzenleme modu açıkçsa isEditing === true butonda Save yazar, değilse 'Edit yazar.
    );
}