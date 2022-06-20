import React from 'react';
import '../css/CartList.css'
import CardItem from './CartItem';
import SideButton from './UI/button/SideButton';
 
const CartList = ({cart, setCart, setVisible, remove, currency, add}) => {

  function clearCart(e) {
    e.preventDefault()
    setCart([]);
    setVisible(false);
  }
  
  return (
    <ul className='cartList'>
      <div className='cart__header'>
        <h1>Кошик ({cart.length})</h1>
      </div>
      
        { cart.length
        ? 
          cart.map(product => 
            <CardItem key={product.id} product={product} remove={remove} add={add} currency={currency} />
          ) 
        : 
          <h1>Ви не додали товар у кошик</h1>
        }
      <div className='cart__footer'>
        <SideButton onClick={e => setVisible(false)} style={{color: '#4cb1ca', boxShadow: '0 0 5px #d4d4d4', borderRadius: '3px'}} >Продовжити покупки</SideButton>
        <SideButton onClick={e => clearCart(e)} style={{color: '#ce2118', borderRadius: '3px'}} >Видалити все</SideButton>
        <SideButton style={{backgroundColor: '#7db122', borderRadius: '3px'}} >Оформити покупку</SideButton>
      </div>
    </ul>
  )
}
 
export default CartList;