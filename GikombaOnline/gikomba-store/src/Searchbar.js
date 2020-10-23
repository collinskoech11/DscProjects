import React from 'react';


const Searchbar = () =>{
    return(
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
        />
    )
}

export default Searchbar;