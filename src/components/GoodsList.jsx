import React from 'react';
import '../css/GoodsList.css'
import Tile from './Tile';

 
const GoodsList = ({title, goods}) => {
  return (
    <section className='goods__list'>
        <h1>{title}</h1>
        <ul>
            {goods.map( goods => 
                <Tile 
                  title={goods.title} 
                  price={goods.price}
                  img={goods.img}
                />
            )}
        </ul>
    </section>
  )
}
 
export default GoodsList;