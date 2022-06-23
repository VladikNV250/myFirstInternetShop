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
import { language } from "../language/language";

const Navbar = ({currentCurrency, setCurrentCurrency, currentLanguage , setCurrentLanguage, cart, setCart, remove, add}) => {
    const [visible, setVisible] = useState(false);

    return (
        <header>
            <nav className='inner__navbar_1'>
                <div style={{display: 'flex'}}>
                <NavSelect 
                    name={language[currentLanguage].language}
                    value={currentLanguage} 
                    onChange={setCurrentLanguage}
                    options={[
                      {value: 'EN', name: 'English'  },
                      {value: 'UA', name: 'Ukrainian'},
                      {value: 'PL', name: 'Poland'   },
                    ]} 
                /> 
                <NavSelect
                    name={language[currentLanguage].currency} 
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
                <ButtonList currentLanguage={currentLanguage} />
            </nav>
            <nav className='inner__navbar_2'>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <h1 className="navbar__h1">LEO SHOP</h1>
                  <NavList 
                    list={[
                      language[currentLanguage].home, language[currentLanguage].men, 
                      language[currentLanguage].women, language[currentLanguage].kids,
                      language[currentLanguage].purchase
                    ]}
                  />
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Search currentLanguage={currentLanguage} />
                  <FAButton icon={faCartShopping} color='#7db122' onClick={() => setVisible(true)} />
                  <h5 className="navbar__h5">{language[currentLanguage].cart} ({cart.length})</h5>
                </div>
            </nav>
            <ModalWindow visible={visible} setVisible={setVisible} >
                    <CartList 
                      currentLanguage={currentLanguage}
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