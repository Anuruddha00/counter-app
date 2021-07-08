import React from 'react';

const decrease = ({num,decrease}) =>{
    return(
        <button onClick={()=>decrease(num - 1)}>Remove</button>
    )
}
export default decrease;