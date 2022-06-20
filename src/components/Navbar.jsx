import React, { useState } from "react";
import FAButton from './UI/button/FAButton';
import Search from './UI/input/Search';
import NavList from './UI/list/NavList';
import NavSelect from './UI/select/NavSelect';
import ButtonList from './ButtonList';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';
import ModalWindow from "./UI/modal/ModalWindow";
import CartList from "./CartList";

const Navbar = ({currentCurrency, setCurrentCurrency, cart, setCart, remove, add}) => {
    const [language, setLanguage] = useState('en');
    const [visible, setVisible] = useState(false);

    return (
        <header>
            <nav className='inner__navbar_1'>
                <div style={{display: 'flex'}}>
                <NavSelect 
                    name="Language:"
                    value={language} 
                    onChange={setLanguage}
                    options={[
                      {value: 'en', name: 'English'  },
                      {value: 'ua', name: 'Ukrainian'},
                      {value: 'pl', name: 'Poland'   },
                    ]} 
                /> 
                <NavSelect
                    name="Currency:" 
                    value={currentCurrency} 
                    onChange={currency => setCurrentCurrency(currency)} 
                    options={[
                      {value: 'USD', name: 'USD'},
                      {value: 'GRN', name: 'GRN'},
                      {value: 'GBP', name: 'GBP'},
                      {value: 'PLN', name: 'PLN'},
                      {value: 'EUR', name: 'EUR'},
                    ]} 
                /> 
                </div>
                <ButtonList />
            </nav>
            <nav className='inner__navbar_2'>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <h1 className="navbar__h1">LEO SHOP</h1>
                  <NavList 
                    list={[
                        'HOME', 'WOMEN', 'MEN', 'OTHER', 'PURCHASE'
                    ]}
                  />
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Search />
                  <FAButton icon={faCartShopping} color='#7db122' onClick={() => setVisible(true)} />
                  <h5 className="navbar__h5">CART ({cart.length})</h5>
                </div>
            </nav>
            <ModalWindow visible={visible} setVisible={setVisible} >
                    <CartList 
                      cart={cart} 
                      setCart={setCart} 
                      setVisible={setVisible}
                      remove={remove}
                      add={add}
                      currency={currentCurrency}
                    />
            </ModalWindow>
      </header>
    )
}

export default Navbar;