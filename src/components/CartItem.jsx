import React from 'react';
import '../css/CartItem.css'
import GoodsCount from './UI/input/GoodsCount';
 
const CartItem = ({goods, currency}) => {
  let currentCurrency = '$'

  switch(currency) {
    case 'USD': currentCurrency = '$' ; break
    case 'GRN': currentCurrency = '₴' ; break
    case 'GBP': currentCurrency = '£' ; break
    case 'PLN': currentCurrency = 'zł' ; break
    case 'EUR': currentCurrency = '€' ; break
  }

  return (
    <li className='cartItem'>
        <article className='inner__cartItem'>
        <h3 className='cartItem__title'>{goods.title}</h3>
          <div className='cartItem__name'>
            <div className='cartItem__image'>
              <img  src={goods.img} alt={goods.title} />
            </div>
            <GoodsCount min="0" max="100" />
            <h3 className='cartItem__price'>{goods.price} {currentCurrency}</h3>
          </div>
        </article>
    </li>
  )
}
 
export default CartItem;