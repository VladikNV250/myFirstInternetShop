import React from 'react';
import '../css/ProductList.css'
import Tile from './Tile';

 
const ProductList = ({title, products, currency, currentLanguage, add}) => {
  return (
    <section className='product__list'>
        {products.length ? <h1>{title}</h1> : null }
        <ul>
            {
              products.map( (product, index) => 
              <Tile 
                currentLanguage={currentLanguage}
                product={product}
                currency={currency}
                add={add}
                key={index}
              />
              )
            }
        </ul>
    </section>
  )
}
 
export default ProductList;