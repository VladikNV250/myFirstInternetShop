import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { language } from '../../../language/language';
import cl from './Search.module.css'
 
const Search = (props) => {
  return (
    <div className={cl.search}>
      <input type="search" placeholder={language[props.currentLanguage].search + '..'}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#656565'}} />
    </div>
  )
}
 
export default Search;