import React, {useState} from 'react';
import Count from './count';

function App() {

  const [number , setNumber] = useState('');

  const inputHandler = (event)=>{
    setNumber(event.target.value)
  }

  return (
    <div>
      <Count input={inputHandler}/>
    </div>
  );
}

export default App;
