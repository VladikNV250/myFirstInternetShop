import React from 'react';
import cl from './NavButton.module.css'
 
const NavButton = ({name, onClick}) => {
  return (
    <button className={cl.navButton} onClick={onClick}>{name}</button>
  )
}
 
export default NavButton;