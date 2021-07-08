import React from 'react';

const counter = ({count}) => {
    return(
        <input type='text' placeholder='enter number' onChange={count}/>
    )
}
export default counter;
