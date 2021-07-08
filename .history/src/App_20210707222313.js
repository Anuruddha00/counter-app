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
      <div style={{display:'flex' , justifyContent:'center' , padding:'10px' , borderRadius:'15px'}}>
        <Count count={inputHandler}/>
      </div>
      <div style={{display:'flex' , justifyContent:'center'}}>
        <Increase num={number} increase={setNumber}/>
        <Decrease num={number} decrease={setNumber}/> 
      </div>
      <p style={{textAlign:'center'}}>{number}</p>
    </div>
  );
}

export default App;
