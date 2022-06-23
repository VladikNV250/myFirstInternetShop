import React from 'react';
import '../css/CartItem.css'
import FAButton from './UI/button/FAButton';
import ProductCount from './UI/input/ProductCount';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { switchCurrency } from '../currency/currency';
 
const CartItem = ({product, currency, remove, add, currentLanguage}) => { //language props for the future
  const [value, setValue] = useState(1)
  let currentCurrency = switchCurrency(currency)

  function createProdWish() {
    const newProdWishList = {
      title: product.title,
      price: product.price,
      img: product.img,
      id: product.id,
    }
    add(newProdWishList)
  }

  return (
    <li className='cartItem'>
        <article className='inner__cartItem'>
        <div className='cartItem__name'>
          <h3 className='cartItem__title'>{product.title}</h3>
          <div style={{display: 'flex'}}>
            <FAButton icon={faHeart} color='#f2da52' onClick={() => createProdWish()}/>
            <FAButton icon={faTrashCan} color='#ce2118' onClick={() => remove(product)}/>
          </div>
        </div>
          <div className='cartItem__body'>
            <div className='cartItem__image'>
              <img  src={product.img} alt={product.title} />
            </div>
            <ProductCount min="0" max="100" value={value} setValue={setValue} />
            <h3 className='cartItem__price'>{(product.price * value).toFixed(2)} {currentCurrency}</h3>
          </div>
        </article>
    </li>
  )
}
 
export default CartItem;