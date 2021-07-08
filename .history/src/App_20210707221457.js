import React, {useState} from 'react';
import Count from './count';
import Increase from './increase';
import Decrease from './decrease';

function App() {

  const [number , setNumber] = useState('');

  const inputHandler = (event)=>{
    setNumber(event.target.value)
  }


  return (
    <div>
      <Count input={inputHandler}/>
      <Increase num={number} increase={setNumber}/>
      <Decrease num={number} decrease={setNumber}/> 
      <p>{number}</p>
    </div>
  );
}

export default App;
