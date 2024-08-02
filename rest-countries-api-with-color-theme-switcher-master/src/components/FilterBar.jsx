import { useContext } from 'react';
import CountryContext from '../store/CountryContext';
import FilterContext from '../store/FilterContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function FilterBar() {
  const countryCtx = useContext(CountryContext);
  const filterCtx = useContext(FilterContext);

  return (
    <>
      {countryCtx.country == '' ?
        <div id="filter-bar">
          <form>
              <select name="filter-regions" id="filter-regions">
                <option value="" id="filter-label">Filter by Region</option>
                <option value="Africa" onClick={filterCtx.filterAfrica}>Africa</option>
                <option value="America" onClick={filterCtx.filterAmericas}>America</option>
                <option value="Asia" onClick={filterCtx.filterAsia}>Asia</option>
                <option value="Europe" onClick={filterCtx.filterEurope}>Europe</option>
                <option value="Oceania" onClick={filterCtx.filterOceania}>Oceania</option>
              </select>
          </form>
          <FontAwesomeIcon icon={faAngleDown} id="filter-bar-icon" />
        </div>
      : undefined}
    </>
  )
}