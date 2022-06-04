import React, { useState } from "react";
import FAButton from './UI/button/FAButton';
import Search from './UI/input/Search';
import NavList from './UI/list/NavList';
import NavSelect from './UI/select/NavSelect';
import ButtonList from './ButtonList';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)

    return (
        <header>
            <nav className='inner__navbar_1'>
                <NavSelect 
                    value="language" 
                    onChange=''
                    options={[
                    {value: 'en', name: 'English'  },
                    {value: 'ua', name: 'Ukrainian'},
                    {value: 'pl', name: 'Poland'   },
                    ]} 
                /> 
                <NavSelect 
                    value="currency" 
                    onChange='' 
                    options={[
                    {value: 'USD', name: 'USD'},
                    {value: 'GRN', name: 'GRN'},
                    {value: 'GBP', name: 'GBP'},
                    {value: 'PLN', name: 'PLN'},
                    {value: 'EUR', name: 'EUR'},
                    ]} 
                /> 
                <ButtonList />
            </nav>
            <nav className='inner__navbar_2'>
                <h1>LEO SHOP</h1>
                <NavList />
                <Search />
                <FAButton icon={faCartShopping} /> {/* cart */}
                <h5>CART ({cartCount})</h5>
            </nav>
      </header>
    )
}

export default Navbar;