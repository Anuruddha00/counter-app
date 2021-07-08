import React, {useState} from 'react';
import Count from './count';
import Increase from './increase';
import Decrease from './decrease';

function App() {

  const [number , setNumber] = useState('');

  const inputHandler = (event)=>{
    setNumber(event.target.value)
  }

  const countHandler = (count)=>{
    setNumber(count)
  }

  return (
    <div>
      <div style={{display:'flex' , justifyContent:'center' , padding:'10px'}}>
        <Count count={inputHandler}/>
      </div>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <Increase num={number} increase={countHandler}/>
        <Decrease num={number} decrease={countHandler}/> 
      </div>
      <p style={{textAlign:'center'}}>{number}</p>
    </div>
  );
}

export default App;
