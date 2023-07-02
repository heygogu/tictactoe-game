import './components/styles.scss';
import Board from './components/board';
import { useState } from 'react';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);
  const handleSquareClick = Clickedposition => {
    if (gamingBoard.squares[Clickedposition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      // currentSquares[0]=1; we can't directly mutate the values, also position in next line have a meaning
      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (Clickedposition == position) {
            return lastGamingState.isXNext ? 'X' : '0';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game{' '}
      </button>
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;

/*const [ counter, setCounter ] = useState(1); //use State always return an array of 2 values, 1st value will be 1 (state)value, second vale is update function(setstate), we can rename them

  /*anything starts with the keyword "use" in react is an hook
  What is useState? In react there are hooks(functions), hooks are used to manipulate component life cycle(mount,update,unmount etc)
  useState allows us to create a  value that will change over component life cycle. */

// const btnClick = () => {
//   console.log('Hello');

//   setCounter((currentCounter)=>{
//     return currentCounter+1;//correct approach .. don't use counter+1 directly
//   });

//this update funciton can receive two types of arguments
//one is static value(normal one)
//other type is , we can passback callback which contain the value which represent current state i.e counter=1 in our case (can rename it)
//whatever is returned from that callback will be set as the new value

/*if we directly use counter=counter+1 like vanilla javascript,
     then we can't render those results in browser cause react doesn't work that way.
      It needs the states to be changed so that it can render a new . 
      React switches between different re renders. 
      A component should utilize re-render to get updated
      a state is used when you need to change something on the screen.
      
      NOte:- If something doesn't change then react is smart enough not to re-render
      even after you use a hook function*/

// }; */
