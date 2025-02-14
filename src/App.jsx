import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'

function App() {
  return (
    <main>
      <div className="game-container">
        <ol id="players">
         <Player initialName="Player 1" symbol="X" />
         <Player initialName="Player 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;


