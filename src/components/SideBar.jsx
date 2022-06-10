import React from 'react';
import '../css/SideBar.css';
import { image } from '../images/image';
import SideButton from './UI/button/SideButton';
import SideInput from './UI/input/SideInput';
import SidePagination from './UI/pagination/SidePagination';
 
const SideBar = () => {
  return (
    <aside className='sidebar' >
        <section className='sidebar__content'>
          <div className='sidebar__hero'>
            <h3>Featured Glass</h3>
              <img src={image.asimg} alt="nema" className='sidebar__img'/>
              <div className='sidebar__btn'>
                <SideButton style={{background: '#4cb1ca'}} >Check it Out</SideButton>
              </div>
          </div>
          <SidePagination />
        </section>

        <form className='sidebar__form'>
            <h3>Newsletters <span style={{marginLeft: '30px'}}>signup</span></h3>
            <p>Lorem ipsum dolor sit amen, dolor imun ra adlip ulissys</p>
            <hr />
            <SideInput type='email' placeholder='example@gmail.com' />
              <SideButton style={{background: '#7eb123', margin: '20px 60px'}} >Subscribe</SideButton>
        </form>
    </aside>
  )
}
 
export default SideBar;