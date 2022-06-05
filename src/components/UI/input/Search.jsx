import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import cl from './Search.module.css'
 
const Search = (props) => {
  return (
    <div className={cl.search}>
      <input type="search" placeholder='Search..'/>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#656565'}} />
    </div>
  )
}
 
export default Search;