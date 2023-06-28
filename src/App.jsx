import './components/styles.scss';
import Board from './components/board';
import { useState } from 'react';
import { calculateWinner } from './winner';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : '0';
  const statusMessage = winner ? 'Winner is ' + winner : "Next Player is: "+nextPlayer;
  const handleSquareClick = Clickedposition => {
    if (squares[Clickedposition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      // currentSquares[0]=1; we can't directly mutate the values, also position in next line have a meaning
      return currentSquares.map((squareValue, position) => {
        if (Clickedposition == position) {
          return isXNext ? 'X' : '0';
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
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
