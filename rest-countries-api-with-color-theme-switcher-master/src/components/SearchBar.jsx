import { useContext } from 'react';
import CountryContext from '../store/CountryContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  const countryCtx = useContext(CountryContext);

  return (
    <>
      {countryCtx.country == '' ?
        <div id="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-bar-icon" />
          <form>
            <input type="search" id="search-input" placeholder='Search for a country...' />
          </form>
        </div>
      : undefined}
    </>
  )
}