import React from 'react';
import '../css/Tile.css';
import FAButton from './UI/button/FAButton';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { multiplierCurrency } from '../currency/multiplierCurrency';
import { switchCurrency } from '../currency/currency';
 
const Tile = ({product, currency, currentLanguage, add}) => {
  let curentCurrency = switchCurrency(currency)

  function createProduct() {
    const newProduct = {
      title: product.title,
      price: ((product.price * multiplierCurrency[currency]).toFixed(2)),
      img: product.img,
      id: product.id,
    }
    add(newProduct);
  }

  return (
    <li className='tile'>
        <article className='inner__tile'>
          <div className='tile__image'>
            <img src={product.img} alt={product.title} />
          </div>
          <div className='tile__body'>
            <div>
              <h3 className='tile__name'>{product.title}</h3>
              <h3 className='tile__price'>{(product.price * multiplierCurrency[currency]).toFixed(2)} {curentCurrency}</h3>
            </div>
            <a className='tile__btn' onClick={createProduct} >
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