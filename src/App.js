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
    { title: 'окуляри зручні lorem ipsum для дітей asdasda dasdads adad asda dsad',  price: 400.00, img: image.glasses, id: 1 },
    { title: 'окуляри1', price: 500.00, img: image.glasses, id: 2 },
    { title: 'окуляри2', price: 250.20, img: image.glasses, id: 3 },
  ])
  const [currentCurrency, setCurrentCurrency] = useState('USD')
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishList, setWishList] = useState([])

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

  function addToWishList(product) {
    setWishList([...wishList, product])
  }

  function removeFromCart(goods) {
      setCart(cart.filter(product => product.id !== goods.id))
      setCartCount(cartCount - 1)
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
        remove={removeFromCart}
        add={addToWishList}
        multiplierCurrency={multiplierCurrency[currentCurrency]}
      />
      <Hero />
      <SideBar />
        <GoodsList 
          title="Пропоновані товари"
          goods={goods}
          multiplierCurrency={multiplierCurrency[currentCurrency]}
          currency={currentCurrency}
          add={addToCart}
        />
        <GoodsList 
          title="Улюблені товари"
          goods={wishList}
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

