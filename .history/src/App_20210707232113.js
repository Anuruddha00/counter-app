import React, {useState} from 'react';
import Count from './count';
import Increase from './increase';
import Decrease from './decrease';

function App() {

  const [counter , setCounter] = useState('');

  const inputHandler = (event)=>{
    setCounter(event.target.value)
  }

  const countHandler = (count)=>{
    setCounter(count)
  }

  return (
    <div>
      <div>
        <Count count={inputHandler}/>
      </div>
      <div>
        <Increase count={counter} increase={countHandler}/>
        <Decrease count={counter} decrease={countHandler}/> 
      </div>
      <p>{counter}</p>
    </div>
  );
}

export default App;
