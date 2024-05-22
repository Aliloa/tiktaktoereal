export default function GameBoard({ onSelectSquare, board }) {
  function cuteSquares(playerSymbol) {
    if (playerSymbol === "X") {
      return <img src="brown_bear.png" alt="" />;
    } else if (playerSymbol === "O") {
      return <img src="white_bear.png" alt="" />;
    }
    return playerSymbol;
  }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {cuteSquares(playerSymbol)}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
