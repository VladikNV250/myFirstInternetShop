import React from 'react';
import cl from './SideInput.module.css'
 
const SideInput = ({...props}) => {
  return (
    <input className={cl.sideInput} {...props} />
  )
}
 
export default SideInput;