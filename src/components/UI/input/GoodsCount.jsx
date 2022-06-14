import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import cl from './GoodsCount.module.css'
import { useState } from 'react';
 
const GoodsCount = (props) => {
  const [value, setValue] = useState(0)

  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    setValue(value - 1)
  }
  return (
    <div className={cl.goodsCount}>
        <button onClick={decrement} className={cl.goodsCount__btn} ><FontAwesomeIcon icon={faMinus} /></button>
        <input type='number' value={value} className={cl.goodsCount__input} {...props} min='0' onChange={e => setValue(Number(e.target.value))}/>
        <button onClick={increment} className={cl.goodsCount__btn} ><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  )
}
 
export default GoodsCount;