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
      <Count count={inputHandler}/>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <Increase style={{padding:'10px'}} num={number} increase={setNumber}/>
        <Decrease num={number} decrease={setNumber}/> 
      </div>
      <p>{number}</p>
    </div>
  );
}

export default App;
