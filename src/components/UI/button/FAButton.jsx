import React from 'react';
import cl from './FAButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const FAButton = ({icon, color, size, iColor, onClick, value}) => {

  return (
    <button 
      className={cl.faButton} 
      style={{background: color, width: size + 'px', height: size + 'px'}}
      value={value}
      onClick={e => onClick(e.target.value)}
    >
      <FontAwesomeIcon 
        style={{fontSize: size / 2.3, color: iColor}} 
        icon={icon}
        onClick={e => onClick(e.currentTarget.parentNode.value)}
      />
    </button>
  )
}
 
export default FAButton;