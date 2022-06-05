import React from 'react';
import cl from './NavList.module.css'
 
const NavList = ({list}) => {
  return (
    <ul className={cl.navList}>
      {list.map((name,index) => 
        <li key={index}>{name}</li>
      )}
    </ul>
  )
}
export default NavList;
