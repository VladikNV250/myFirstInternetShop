import React from 'react';
import '../css/Hero.css'
import FAButton from './UI/button/FAButton';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
 
const Hero = ({img}) => {
  return (
    <section className='hero__section'>
        <img className='hero__bg' src={img} alt="nema" />
          <div className='hero__btn'>
            <FAButton 
              icon={faChevronLeft} 
              color="white" 
              size='67' 
              iColor='#cdcdcd'
            />
          </div>
          <div className='hero__header'>
            <h1>Aluminium Club</h1>
            <h1 style={{fontWeight: '700'}}>Experience Ray-Ban</h1>
          </div>
          <div className='hero__btn' style={{left: '86%'}}>
          <FAButton 
            icon={faChevronRight} 
            color="white" 
            size='67' 
            iColor='#cdcdcd'
          />
          </div>
    </section>
  )
}
 
export default Hero;