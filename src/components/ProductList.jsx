import React from 'react';
import { useContext } from 'react';
import { CurrencyContext } from '../context';
import { LanguageContext } from '../context/languageContext';
import '../css/ProductList.css'
import Tile from './Tile';

 
const ProductList = ({title, products, add}) => {
  const {currentCurrency} = useContext(CurrencyContext);
  const {currentLanguage} = useContext(LanguageContext);

  return (
    <section className='product__list'>
        {products.length ? <h1>{title}</h1> : null }
        <ul>
            {
              products.map( (product, index) => 
              <Tile 
                currentLanguage={currentLanguage}
                product={product}
                currency={currentCurrency}
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