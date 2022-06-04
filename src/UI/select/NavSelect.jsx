import React from "react";
import {cl} from './NavSelect.module.css'

const NavSelect = ({options}) => {
    return (
        <div>
            <select>
                {options.map( (option, index) => {
                    <option value={option.value} key={index}>{option.name}</option>
                })}
            </select>
        </div>
    )
}

export default NavSelect; 

