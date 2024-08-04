import { useState, useContext } from 'react';
import CountryContext from '../store/CountryContext';
import FilterContext from '../store/FilterContext';
import DarkModeContext from '../store/DarkModeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  const [userInput, setUserInput] = useState('')
  const countryCtx = useContext(CountryContext);
  const filterCtx = useContext(FilterContext);
  const darkModeCtx = useContext(DarkModeContext);

  function handleChange(e) {
    setUserInput(e.target.value);
    filterCtx.searchCountries(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      {countryCtx.country == '' ?
        <div
          id="search-bar"
          className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-bar-icon" />
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              id="search-input"
              className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
              placeholder='Search for a country...'
              autoComplete='off'
              value={userInput}
              onChange={handleChange}
            />
          </form>
        </div>
      : undefined}
    </>
  )
}