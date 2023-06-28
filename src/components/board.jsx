import { render } from 'react-dom';
import Square from './square';
import { useState } from 'react';
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(false);
  
  const handleSquareClick = Clickedposition => {

    if(squares[Clickedposition]){
      return;
    }


    setSquares(currentSquares => {
      // currentSquares[0]=1; we can't directly mutate the values, also position in next line have a meaning
      return currentSquares.map((squareValue, position) => {
        if (Clickedposition == position) {
          return isXNext ? 'X' : "0";
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {/* <Square value={squares[0]} onClick={() => handleSquareClick(0)} />    putted this in function */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
