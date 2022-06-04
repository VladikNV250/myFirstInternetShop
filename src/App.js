import { useState } from 'react';
import './css/App.css';
import FAButton from './UI/button/FAButton';
import NavButton from './UI/button/NavButton';
import NavList from './UI/list/NavList';
import NavSelect from './UI/select/NavSelect';

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <div className='inner__navbar_1'>
          <NavSelect /> {/* language */}
          <NavSelect /> {/* currency select */}
          <NavButton name="Account" />
          <NavButton name="Wishlist" />
          <NavButton name="Checkout" />
          <NavButton name="Log In" />
          <NavButton name="Sign Up" />
        </div>
{/* ---------------------------------- */}
        <div className='inner__navbar_2'>
          <h1>LEO SHOP</h1>
          <NavList />
          <Search />
          <FAButton /> {/* cart */}
          <h5>CART ({cartCount})</h5>
        </div>
      </nav>
    </div>
  );
}

export default App;
