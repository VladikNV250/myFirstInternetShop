import React from 'react';
import {cl} from './NavButton.module.css'
 
const NavButton = ({name, onClick}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}
 
export default NavButton;