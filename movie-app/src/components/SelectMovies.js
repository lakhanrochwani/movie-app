import React from 'react';

function SelectMovies(){
    
    const handleClick = (e) => {
        e.target.disabled = true;
    }
    return (
        <div>
            <button onClick={handleClick} className='btn btn-outline-info'> Add to Selected Movies </button>
        </div>
    )
}
export default SelectMovies;