import { useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { image } from './images/image';
import SideBar from './components/SideBar';
import GoodsList from './components/GoodsList';


function App() {
  const [goods, setGoods] = useState([
    { title: 'окуляри', price: '400', img: image.glasses },
    { title: 'окуляри1', price: '500', img: image.glasses },
    { title: 'окуляри2', price: '250', img: image.glasses },

  ])

  return (
    <div className="App">
      <Navbar />
      <Hero img={image.hero1} />
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
