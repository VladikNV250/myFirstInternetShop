import React from 'react';
import cl from './FAButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const FAButton = ({icon, color, size, iColor}) => {

  return (
    <button 
      className={cl.faButton} 
      style={{background: color, width: size + 'px', height: size + 'px'}}
    >
      <FontAwesomeIcon 
        style={{fontSize: size / 2.3, color: iColor}} 
        icon={icon} 
      />
    </button>
  )
}
 
export default FAButton;