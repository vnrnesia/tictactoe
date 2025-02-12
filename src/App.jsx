import Player from './components/Player.jsx'

function App() {
  return (
    <main>
      <div className="game-container">
        <ol id="players">
         <Player name="Player 1" symbol="X" />
         <Player name="Player 2" symbol="0" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;


