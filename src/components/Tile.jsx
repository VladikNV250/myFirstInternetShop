import React from 'react';
import '../css/Tile.css';
import FAButton from './UI/button/FAButton';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
 
const Tile = ({title, price, img}) => {
  return (
    <li>
        <article>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h3>{price}</h3>
            <FAButton icon={faBasketShopping} color="#7db122" />
        </article>
    </li>
  )
}
 
export default Tile;