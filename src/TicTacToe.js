import {useState} from 'react';

function Button({value, onButtonClick}) {
  return <button onClick={onButtonClick} className="square" >{value}</button>
}

function Board() {
  const [isNext, setIsNext] = useState(true);
  const [buttons, setButtons] = useState(Array(9).fill(null))

  function onButtonClick(i) {
    if (buttons[i] || calculateWinner(buttons)) {
      return;
    }

    const nextButtons = buttons.slice();
    if (isNext) {
      nextButtons[i] = 'X';
    } else {
      nextButtons[i] = '0';
    }

    setButtons(nextButtons);
    setIsNext(!isNext);
  }

  const winner = calculateWinner(buttons);

  let status;

  if (winner) {
    status = winner + " a gagné";
  } else {
    status = "Prochain tour : " + (isNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Button value={buttons[0]} onButtonClick={() => onButtonClick(0)} />
        <Button value={buttons[1]} onButtonClick={() => onButtonClick(1)} />
        <Button value={buttons[2]} onButtonClick={() => onButtonClick(2)} />
      </div>
      <div className="board-row">
        <Button value={buttons[3]} onButtonClick={() => onButtonClick(3)} />
        <Button value={buttons[4]} onButtonClick={() => onButtonClick(4)} />
        <Button value={buttons[5]} onButtonClick={() => onButtonClick(5)} />
      </div>
      <div className="board-row">
        <Button value={buttons[6]} onButtonClick={() => onButtonClick(6)} />
        <Button value={buttons[7]} onButtonClick={() => onButtonClick(7)} />
        <Button value={buttons[8]} onButtonClick={() => onButtonClick(8)} />
      </div>
    </>
  );

  function calculateWinner(buttons) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (buttons[a] && buttons[a] === buttons[b] && buttons[a] === buttons[c]) {
        return buttons[a];
      }
    }
    return null;
  }
}

export default function TicTacToe() {
  return (
    <>
      <Board/>
    </>
  );
}
