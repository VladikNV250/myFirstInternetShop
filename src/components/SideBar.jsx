import React, { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import '../css/SideBar.css';
import { image } from '../images/image';
import { language } from '../language/language';
import SideButton from './UI/button/SideButton';
import SideInput from './UI/input/SideInput';
import SidePagination from './UI/pagination/SidePagination';
 
const SideBar = () => {
  const {currentLanguage} = useContext(LanguageContext);

  return (
    <aside className='sidebar' >
        <section className='sidebar__content'>
          <div className='sidebar__hero'>
            <h3>{language[currentLanguage].featuredGlasses}</h3>
              <img src={image.asimg} alt="nema" className='sidebar__img'/>
              <div className='sidebar__btn'>
                <SideButton style={{background: '#4cb1ca'}} >{language[currentLanguage].checkItOut}</SideButton>
              </div>
          </div>
          <SidePagination />
        </section>

        <form className='sidebar__form'>
            <h3>{language[currentLanguage].newsletters} <span style={{marginLeft: '30px'}}>{language[currentLanguage].signUp}</span></h3>
            <p>Lorem ipsum dolor sit amen, dolor imun ra adlip ulissys</p>
            <hr />
            <SideInput type='email' placeholder='example@gmail.com' />
              <SideButton style={{background: '#7eb123', margin: '20px 60px'}} >{language[currentLanguage].subscribe}</SideButton>
        </form>
    </aside>
  )
}
 
export default SideBar;