/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useState } from 'react';

function CarSeat(){
    /* Creating states for seat clicks */
    const [isActive, setIsActive] = useState(false);

    /* When clicked, toggle state */
    const handleClick = e => {
    console.log(e.currentTarget)
    setIsActive(current => !current)
  };

    return(
        <img src="https://static.thenounproject.com/png/4939260-200.png" alt="car seat image"
            style={{
                backgroundColor: isActive ? 'blue' : ''
            }}
            
            onClick={handleClick}
        />
    )
}

export default CarSeat;