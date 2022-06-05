import React from 'react';
import NavButton from './UI/button/NavButton';
// import '../css/ButtonList.css'
 
const ButtonList = () => {
  return (
    <div style={{color: '#fff'}}>
        <NavButton name="Account" /> |
        <NavButton name="Wishlist" /> |
        <NavButton name="Checkout" /> |
        <NavButton name="Log In" /> |
        <NavButton name="Sign Up" /> 
    </div>
  )
}
 
export default ButtonList;