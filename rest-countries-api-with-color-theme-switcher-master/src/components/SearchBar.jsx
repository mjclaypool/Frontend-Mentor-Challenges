import { useContext } from 'react';
import CountryContext from '../store/CountryContext';
import DarkModeContext from '../store/DarkModeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  const countryCtx = useContext(CountryContext);
  const darkModeCtx = useContext(DarkModeContext);

  return (
    <>
      {countryCtx.country == '' ?
        <div
          id="search-bar"
          className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-bar-icon" />
          <form>
            <input
              type="search"
              id="search-input"
              className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
              placeholder='Search for a country...'
            />
          </form>
        </div>
      : undefined}
    </>
  )
}