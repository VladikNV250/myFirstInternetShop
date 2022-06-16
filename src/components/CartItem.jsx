import React from 'react';
import '../css/CartItem.css'
import FAButton from './UI/button/FAButton';
import GoodsCount from './UI/input/GoodsCount';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
 
const CartItem = ({goods, currency, remove, add, multiplierCurrency}) => {
  const [value, setValue] = useState(1)
  let currentCurrency = '$'

  switch(currency) {
    case 'USD': currentCurrency = '$' ; break
    case 'GRN': currentCurrency = '₴' ; break
    case 'GBP': currentCurrency = '£' ; break
    case 'PLN': currentCurrency = 'zł' ; break
    case 'EUR': currentCurrency = '€' ; break
  }

  function createProdWish() {
    const newProdWishList = {
      title: goods.title,
      price: goods.price,
      img: goods.img,
      id: goods.id,
    }
    add(newProdWishList)
  }

  return (
    <li className='cartItem'>
        <article className='inner__cartItem'>
        <div className='cartItem__name'>
          <h3 className='cartItem__title'>{goods.title}</h3>
          <div style={{display: 'flex'}}>
            <FAButton icon={faHeart} color='#f2da52' onClick={() => createProdWish()}/>
            <FAButton icon={faTrashCan} color='#ce2118' onClick={() => remove(goods)}/>
          </div>
        </div>
          <div className='cartItem__body'>
            <div className='cartItem__image'>
              <img  src={goods.img} alt={goods.title} />
            </div>
            <GoodsCount min="0" max="100" value={value} setValue={setValue} />
            <h3 className='cartItem__price'>{(goods.price * value * multiplierCurrency).toFixed(2)} {currentCurrency}</h3>
          </div>
        </article>
    </li>
  )
}
 
export default CartItem;