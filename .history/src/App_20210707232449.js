import React, {useState} from 'react';
import Count from './count';
import Increase from './increase';
import Decrease from './decrease';

function App() {

  const [counter , setCounter] = useState('');

  const inputHandler = (event)=>{
    setCounter(event.target.value)
  }

  
  return (
    <div>
      <div>
        <Count count={inputHandler}/>
      </div>
      <div>
        <Increase count={counter} increase={(count)=>setCounter(count)}/>
        <Decrease count={counter} decrease={(count)=>setCounter(count)}/> 
      </div>
      <p>{counter}</p>
    </div>
  );
}

export default App;
