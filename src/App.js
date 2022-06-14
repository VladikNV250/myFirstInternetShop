import { useEffect, useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { image } from './images/image';
import SideBar from './components/SideBar';
import GoodsList from './components/GoodsList';
import _ from 'lodash';


function App() {
  const [goods, setGoods] = useState([
    { title: 'окуляри зручні lorem ipsum для дітей asdasda dasdads adad asda dsad',  price: 400.00, img: image.glasses },
    { title: 'окуляри1', price: 500.00, img: image.glasses },
    { title: 'окуляри2', price: 250.20, img: image.glasses },
  ])
  const [currentCurrency, setCurrentCurrency] = useState('USD')
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const multiplierCurrency = {
    'USD': 1,
    'GRN': 29.76,
    'GBP': 0.81,
    'PLN': 4.38,
    'EUR': 0.95,
  }

  function addToCart(goods) {
    setCart([...cart, goods])
    setCartCount(cartCount + 1)
  }

  return (
    <div className="App">
      <Navbar 
        currentCurrency={currentCurrency} 
        setCurrentCurrency={setCurrentCurrency} 
        setCartCount={setCartCount} 
        cartCount={cartCount}
        cart={cart}
        setCart={setCart} 
      />
      <Hero />
      <SideBar />
        <GoodsList 
          title="Улюблені товари"
          goods={goods}
          multiplierCurrency={multiplierCurrency[currentCurrency]}
          currency={currentCurrency}
          add={addToCart}
        />
        <GoodsList 
          title="Рекомендовано"
          goods={goods}
          multiplierCurrency={multiplierCurrency[currentCurrency]}
          currency={currentCurrency}
          add={addToCart}
        />
        <GoodsList 
          title="Нові товари"
          goods={goods}
          multiplierCurrency={multiplierCurrency[currentCurrency]}
          currency={currentCurrency}
          add={addToCart}
        />
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

