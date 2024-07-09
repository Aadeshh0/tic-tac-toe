import React from 'react';

const Square = ({ value, onclick}) => {
    return (
        <button className='square' onclick={onclick}>
            {value}
        </button>
    );
}

export default Square;
