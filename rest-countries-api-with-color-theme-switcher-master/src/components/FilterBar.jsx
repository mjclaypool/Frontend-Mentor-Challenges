import { useContext } from 'react';
import CountryContext from '../store/CountryContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function FilterBar() {
  const countryCtx = useContext(CountryContext);

  return (
    <>
      {countryCtx.country == '' ?
        <div id="filter-bar">
          <form>
              <select name="filter-regions" id="filter-regions">
                <option value="" id="filter-label">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
          </form>
          <FontAwesomeIcon icon={faAngleDown} id="filter-bar-icon" />
        </div>
      : undefined}
    </>
  )
}