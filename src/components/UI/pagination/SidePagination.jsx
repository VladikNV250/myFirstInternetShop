import React from 'react';
import cl from './SidePagination.module.css'
 
const SidePagination = (props) => {
  return (
    <div className={cl.pagination}>
      <div className={cl.round}></div>
      <div className={[cl.round, cl.active].join(' ')}></div>
      <div className={cl.round}></div>
    </div>
  )
}
 
export default SidePagination;