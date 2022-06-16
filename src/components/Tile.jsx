import React from 'react';
import '../css/Tile.css';
import FAButton from './UI/button/FAButton';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
 
const Tile = ({title, price, img, id, currency, add}) => {
  let curentCurrency = '$'

  switch(currency) {
    case 'USD': curentCurrency = '$' ; break
    case 'GRN': curentCurrency = '₴' ; break
    case 'GBP': curentCurrency = '£' ; break
    case 'PLN': curentCurrency = 'zł' ; break
    case 'EUR': curentCurrency = '€' ; break
  }

  function createGoods() {
    const newGoods = {
      title: title,
      price: price,
      img: img,
      id: id,
    }
    add(newGoods);
  }

  return (
    <li className='tile'>
        <article className='inner__tile'>
          <div className='tile__image'>
            <img  src={img} alt={title} />
          </div>
          <div className='tile__body'>
            <div>
              <h3 className='tile__name'>{title}</h3>
              <h3 className='tile__price'>{price} {curentCurrency}</h3>
            </div>
            <a className='tile__btn' onClick={createGoods} >
              <FAButton 
                icon={faBasketShopping} 
                color="#7db122" 
              />
            </a>
          </div>
        </article>
    </li>
  )
}
 
export default Tile;