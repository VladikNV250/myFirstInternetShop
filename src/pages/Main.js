import { useContext, useEffect, useState } from 'react';
import '../css/Main.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { image } from '../images/image';
import SideBar from '../components/SideBar';
import ProductList from '../components/ProductList';
import _ from 'lodash';
import { language } from '../language/language';
import { LanguageContext } from '../context/languageContext';
import { CurrencyContext } from '../context';



function Main() {
  const {currentLanguage} = useContext(LanguageContext);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [newProducts, setNewProducts] = useState([])
  const [products, setProducts] = useState([
    { title: 'окуляри зручні lorem ipsum для дітей asdasda dasdads adad asda dsad',  price: 72, img: image.glasses.gl_1, id: 1, },
    { title: 'окуляри1', price: 50, img: image.glasses.gl_2, id: 2, },
    { title: 'окуляри2', price: 150, img: image.glasses.gl_3, id: 3, },
  ]);
  const [groupProducts, setGroupProducts] = useState([
    {title: language[currentLanguage].offeredProducts, products: products},
    {title: language[currentLanguage].wishProducts, products: wishList},
    {title: language[currentLanguage].newProducts, products: newProducts},
  ])

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
    <div>
      <Navbar 
        cart={cart}
        setCart={setCart} 
        remove={removeFromCart}
        add={addToWishList}
      />
      <Hero />
      <SideBar />
      {
        groupProducts.map(group => 
          <ProductList 
            key={group.title}
            title={group.title}
            products={group.products}
            add={addToCart}
          />
        )
      }
      <footer>
        
      </footer>
    </div>
  );
}

export default Main;