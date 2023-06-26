import './components/styles.scss';
import { useState } from 'react';
function App() {
  const [ counter, setCounter ] = useState(1); //use State always return an array of 2 values, 1st value will be 1 (state)value, second vale is update function(setstate), we can rename them

  /*anything starts with the keyword "use" in react is an hook
  What is useState? In react there are hooks(functions), hooks are used to manipulate component life cycle(mount,update,unmount etc)
  useState allows us to create a  value that will change over component life cycle. */

  const btnClick = () => {
    console.log('Hello');
    
    setCounter((currentCounter)=>{
      return currentCounter+1;//correct approach .. don't use counter+1 directly
    }); 
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
  };
  return (
    <div className="app">
      <div>
        <button onClick={btnClick}>Click Me</button>
        <h1>{counter}</h1>
      </div>
    </div>
  );
}

export default App;
