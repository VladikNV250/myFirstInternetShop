import { useEffect, useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { image } from './images/image';
import SideBar from './components/SideBar';
import ProductList from './components/ProductList';
import _ from 'lodash';
import { language } from './language/language';


function App() {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [currentLanguage, setCurrentLanguage]  = useState('EN')
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState([
    { title: 'окуляри зручні lorem ipsum для дітей asdasda dasdads adad asda dsad',  price: 72, img: image.glasses.gl_1, id: 1, },
    { title: 'окуляри1', price: 50, img: image.glasses.gl_2, id: 2, },
    { title: 'окуляри2', price: 150, img: image.glasses.gl_3, id: 3, },
  ]);

  function addToCart(product) {
    
    function isInCart(product) {
      return _.findIndex(cart, function(currentProduct) {return currentProduct.id == product.id; }) == -1
    }

    if(isInCart(product)) {
      setCart([...cart, product])
    }
  }

  function addToWishList(product) {
    setWishList([...wishList, product])
  }

  function removeFromCart(goods) {
      setCart(cart.filter(product => product.id !== goods.id))
  }

  return (
    <div className="App">
      <Navbar 
        currentCurrency={currentCurrency} 
        setCurrentCurrency={setCurrentCurrency} 
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        cart={cart}
        setCart={setCart} 
        remove={removeFromCart}
        add={addToWishList}
      />
      <Hero />
      <SideBar currentLanguage={currentLanguage} />
        <ProductList 
          title={language[currentLanguage].offeredProducts}
          products={products}
          currency={currentCurrency}
          add={addToCart}
          currentLanguage={currentLanguage}
        />
        <ProductList 
          title={language[currentLanguage].wishProducts}
          products={wishList}
          currency={currentCurrency}
          add={addToCart}
          currentLanguage={currentLanguage}
        />
        <ProductList 
          title={language[currentLanguage].newProducts}
          products={products}
          currency={currentCurrency}
          add={addToCart}
          currentLanguage={currentLanguage}
        />
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

