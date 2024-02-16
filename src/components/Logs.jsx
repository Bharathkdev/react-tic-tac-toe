const Logs = ({ gameTurns, players }) => {
  return (
    <ol id="log">
      {gameTurns.map((gameTurn) => (
        <li key={`${gameTurn.square.row}${gameTurn.square.col}`}>
          {players[gameTurn.player]} selects {gameTurn.square.row},
          {gameTurn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Logs;
