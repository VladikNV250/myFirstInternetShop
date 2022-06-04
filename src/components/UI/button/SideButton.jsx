import React from 'react';
import {cl} from './SideButton.module.css'
 
const SideButton = ({children}) => {
  return (
    <button>{children}</button>
  )
}
 
export default SideButton;