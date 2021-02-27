import React from "react";
import "./search-box.style.css";

export const SearchBox = ({placeholder , changeHandle}) => {
    return (
        <input className='search' type='search' placeholder={placeholder} onChange={changeHandle} />
    )
}