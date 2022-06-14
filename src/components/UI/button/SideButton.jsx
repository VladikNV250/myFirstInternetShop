import React from 'react';
import cl from './SideButton.module.css'
 
const SideButton = ({onClick,children,style}) => {
  return (
    <button onClick={e => onClick(e)} className={cl.sideBtn} style={style}>{children}</button>
  )
}
 
export default SideButton;