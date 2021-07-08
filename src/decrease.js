import React from 'react';

const decrease = ({count,decrease}) =>{
    return(
        <button onClick={()=>decrease(count - 1)}>Remove</button>
    )
}
export default decrease;