import React from 'react';

const increase = ({num,increase}) =>{
    return(
        <button onClick={()=> increase(num + 1)}>add</button>
    )
}
export default increase;