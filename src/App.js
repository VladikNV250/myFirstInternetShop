import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CurrencyContext } from './context';
import { LanguageContext } from './context/languageContext';
import Main from './pages/Main';

function App() {
  const [currentCurrency, setCurrentCurrency] = useState('USD')
  const [currentLanguage, setCurrentLanguage] = useState('EN')

  useEffect(() => {
    if(!localStorage.getItem('language')) localStorage.setItem('language', 'EN')
    if(!localStorage.getItem('currency')) localStorage.setItem('currency', 'USD')
    setCurrentCurrency(localStorage.getItem('currency'))
    setCurrentLanguage(localStorage.getItem('language'))
  }, [])

  useEffect(() => {
    localStorage.getItem('language') ? localStorage.setItem('language', currentLanguage) : localStorage.setItem('language', 'EN')
    localStorage.getItem('currency') ? localStorage.setItem('currency', currentCurrency) : localStorage.setItem('currency', 'USD')
  }, [currentLanguage, currentCurrency])

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage
    }}>
      <CurrencyContext.Provider value={{
        currentCurrency,
        setCurrentCurrency
      }}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </CurrencyContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;

