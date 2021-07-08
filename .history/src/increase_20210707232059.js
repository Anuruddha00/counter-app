import React from 'react';

const increase = ({count,increase}) =>{
    return(
        <button onClick={()=> increase(parseInt(count) + 1)}>add</button>
    )
}
export default increase;