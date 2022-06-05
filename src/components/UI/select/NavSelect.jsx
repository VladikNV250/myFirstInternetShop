import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cl from './NavSelect.module.css'

const NavSelect = ({name, options, value, onChange}) => {
    return (
        <div className={cl.navSelect}>
            <h5>{name}</h5>
            <select value={value} onChange={ e => onChange(e.target.value)}>
                {options.map( option => 
                    <option value={option.value} key={option.value}>{option.name}</option>
                )}
            </select>
            <FontAwesomeIcon style={{margin: '3px 0 0 5px', fontSize: '13px'}} icon={faChevronDown} />
        </div>
    )
}

export default NavSelect; 

