import React from 'react';
import cl from './FAButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const FAButton = ({icon, color}) => {

  return (
    <button className={cl.faButton} style={{background: color}}><FontAwesomeIcon icon={icon} /></button>
  )
}
 
export default FAButton;