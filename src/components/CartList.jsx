import React from 'react';
import '../css/CartList.css'
import CardItem from './CartItem';
import SideButton from './UI/button/SideButton';
 
const CartList = ({cart, setCart, setVisible, setCartCount}) => {

  function clearCart(e) {
    e.preventDefault()
    setCart([]);
    setVisible(false);
    setCartCount(0)
  }

  return (
    <ul className='cartList'>
      <h1>Кошик</h1>
        { cart.length
        ? 
          cart.map(goods => 
            <CardItem goods={goods} />
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