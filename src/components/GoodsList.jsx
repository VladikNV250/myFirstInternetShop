import React from 'react';
import '../css/GoodsList.css'
import Tile from './Tile';

 
const GoodsList = ({title, goods, currency, multiplierCurrency, add}) => {
  return (
    <section className='goods__list'>
        <h1>{title}</h1>
        <ul>
            {goods.map( (goods, index) => 
                <Tile 
                  title={goods.title} 
                  price={(goods.price * multiplierCurrency).toFixed(2)}
                  img={goods.img}
                  currency={currency}
                  add={add}
                  key={index}
                />
            )}
        </ul>
    </section>
  )
}
 
export default GoodsList;