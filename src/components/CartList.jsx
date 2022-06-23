import React from 'react';
import { useState } from 'react';
import '../css/CartList.css'
import { language } from '../language/language';
import CardItem from './CartItem';
import SideButton from './UI/button/SideButton';
 
const CartList = ({cart, setCart, setVisible, remove, currency, currentLanguage, add}) => {
  // const [totalCost, setTotalCost] = useState(0)
  
  function clearCart(e) {
    e.preventDefault()
    setCart([]);
    setVisible(false);
  }
  
  return (
    <ul className='cartList'>
      <div className='cart__header'>
        <h1>{language[currentLanguage].cart} ({cart.length})</h1>
      </div>
      
        { cart.length
        ? 
          cart.map(product => 
            <CardItem key={product.id} product={product} remove={remove} add={add} currency={currency} currentLanguage={currentLanguage} />
          ) 
        : 
          <h1>{language[currentLanguage].noProducts}</h1>
        }
      <div className='cart__footer'>
        <SideButton 
          onClick={e => setVisible(false)} 
          style={{color: '#4cb1ca', boxShadow: '0 0 5px #d4d4d4', borderRadius: '3px'}} 
          currentLanguage={currentLanguage}
        >
          {language[currentLanguage].continueShopping}
        </SideButton>
        <SideButton 
          onClick={e => clearCart(e)} 
          style={{color: '#ce2118', borderRadius: '3px'}} 
          currentLanguage={currentLanguage}
        >
          {language[currentLanguage].deleteEverything}
        </SideButton>
        
        {/* <h1>{totalCost}</h1> */}

        <SideButton 
          style={{backgroundColor: '#7db122', borderRadius: '3px'}} 
          currentLanguage={currentLanguage}
        >
          {language[currentLanguage].goToCheckout}
        </SideButton>
      </div>
    </ul>
  )
}
 
export default CartList;