import React from "react";
import {cl} from './NavSelect.module.css'

const NavSelect = ({options, value, onChange}) => {
    return (
        <div>
            <select value={value} onChange={ e => onChange(e.target.value)}>
                {options.map( option => 
                    <option value={option.value} key={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    )
}

export default NavSelect; 

