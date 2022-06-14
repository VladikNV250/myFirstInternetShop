import React from 'react';
import '../css/Hero.css'
import FAButton from './UI/button/FAButton';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import HeroBackground from './HeroBackground';
import { useState } from 'react';
import { image } from '../images/image';
 
const Hero = () => {
  const [translate, setTranslate] = useState(0);
  const background = [ 
    image.background.hero1, 
    image.background.hero2, 
    image.background.hero3, 
    image.background.hero4,
  ]
  
  function changeBackground(event) {
    if(translate == -((background.length - 1) * 100) && event === 'right') {
      setTranslate(0);
      return;
    }
    if (translate == 0 && event === 'left') {
      setTranslate(-((background.length - 1) * 100));
      return;
    }
    if(event === 'right') {
      setTranslate(translate - 100) 
      return;
    } 
    if(event === 'left') {
      setTranslate(translate + 100);
      return
    } 
    console.log(`translate at this moment: ${translate}`)
  }

// function test() {
//   setTimeout(() => {
//     changeBackground('right')
//     test()
//   }, 5000)
// }

// test()

  return (
    <section className='hero__section' style={{width: background.length * 100 + 'vw'}}>
        <ul className='inner__hero' style={{transform: `translate3d(${translate + 'vw'}, 0, 0)`}}>
          {background.map((img, index) => 
            <HeroBackground key={index} img={img} />
          )}
        </ul>
          <div className='hero__btn'>
            <FAButton 
              icon={faChevronLeft} 
              color="white" 
              size='67' 
              iColor='#cdcdcd'
              value='left'
              onClick={changeBackground}
            />
          </div>
          <div className='hero__btn' style={{left: '86%'}}>
          <FAButton 
            icon={faChevronRight} 
            color="white" 
            size='67' 
            iColor='#cdcdcd'
            onClick={changeBackground}
            value='right'
          />
          </div>
    </section>
  )
}
 
export default Hero;