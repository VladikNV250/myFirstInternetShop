import React from 'react';
// import '../css/HeroBackground.css'
 
const HeroBackground = ({img}) => {
  return (
    <li className='hero__bg'>
        <img  src={img} alt="nema" />
    </li>
  )
}
 
export default HeroBackground;