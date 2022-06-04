import React from 'react';
import '../css/Hero.css'
import FAButton from './UI/button/FAButton';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
 
const Hero = ({img}) => {
  return (
    <section>
        <img src={img} alt="nema" style={{zIndex: '0'}}/>
          <FAButton icon={faChevronLeft} color="grey" />
          <FAButton icon={faChevronRight} color="grey" />
          <h1>Ababa laga ma</h1>
    </section>
  )
}
 
export default Hero;