import { useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { image } from './images/image';
import SideBar from './components/SideBar';
import GoodsList from './components/GoodsList';


function App() {
  const [goods, setGoods] = useState([
    { title: 'окуляри зручні lorem ipsum для дітей asdasda dasdads adad asda dsad',  price: '400.00', img: image.glasses },
    { title: 'окуляри1', price: '500.00', img: image.glasses },
    { title: 'окуляри2', price: '250.20', img: image.glasses },
    { title: 'окуляри3', price: '400.00', img: image.glasses },
    { title: 'окуляри4', price: '500.20', img: image.glasses },
    { title: 'окуляри5', price: '250.20', img: image.glasses },
    { title: 'окуляр6',  price: '400.20', img: image.glasses },
    { title: 'окуляри7', price: '500.00', img: image.glasses },
    { title: 'окуляри8', price: '250.20', img: image.glasses },
  ])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SideBar />
        <GoodsList 
          title="Улюблені товари"
          goods={goods}
        />
        <GoodsList 
          title="Рекомендовано"
          goods={goods}
        />
        <GoodsList 
          title="Нові товари"
          goods={goods}
        />
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

