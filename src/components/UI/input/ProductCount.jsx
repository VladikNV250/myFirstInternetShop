import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import cl from './ProductCount.module.css'
import { useState } from 'react';
 
const ProductCount = ({value, setValue, ...props}) => {


  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    setValue(value - 1)
  }
  return (
    <div className={cl.productCount}>
        <button onClick={decrement} className={cl.productCount__btn} ><FontAwesomeIcon icon={faMinus} /></button>
        <input type='number' value={value} className={cl.productCount__input} {...props} min='0' onChange={e => setValue(Number(e.target.value))}/>
        <button onClick={increment} className={cl.productCount__btn} ><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}
 
export default ProductCount;