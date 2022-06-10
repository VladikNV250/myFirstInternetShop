import React from 'react';
import cl from './SideButton.module.css'
 
const SideButton = ({children,style}) => {
  return (
    <button className={cl.sideBtn} style={style}>{children}</button>
  )
}
 
export default SideButton;