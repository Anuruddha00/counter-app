import React from 'react';

const count = (props) =>{
    return(
        <input type='text' placeholder='enter amount' onChange={props.input} />
    )
}
export default count;