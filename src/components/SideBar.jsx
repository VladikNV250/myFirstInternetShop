import React from 'react';
import '../css/SideBar.css';
import { image } from '../images/image';
import SideButton from './UI/button/SideButton';
 
const SideBar = () => {
  return (
    <aside style={{float: 'right'}}>
        <section>
          <h3>Featured Glass</h3>
          <div style={{width: "230px", height: '390px'}}>
              <img src={image.asimg} alt="nema" style={{width: "100%", height: "100%"}}/>
              <SideButton>cheked out</SideButton>
          </div>
        </section>

        <form>
            <h3>Newsletters signup</h3>
            <p>Lorem ipsum dolor sit amen, dolor imun ra adlip ulissys</p>
            <SideButton>Subscribe</SideButton>
        </form>
    </aside>
  )
}
 
export default SideBar;