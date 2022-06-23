import React from 'react';
import { language } from '../language/language';
import NavButton from './UI/button/NavButton';
// import '../css/ButtonList.css'
 
const ButtonList = ({currentLanguage}) => {
  return (
    <div style={{color: '#fff'}}>
        <NavButton name={language[currentLanguage].account}  /> |
        <NavButton name={language[currentLanguage].wishlist} /> |
        <NavButton name={language[currentLanguage].logIn}    /> |
        <NavButton name={language[currentLanguage].signUp}   /> 
    </div>
  )
}
 
export default ButtonList;