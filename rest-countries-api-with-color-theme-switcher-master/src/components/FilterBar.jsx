import { useContext } from 'react';
import FilterContext from '../store/FilterContext';
import DarkModeContext from '../store/DarkModeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function FilterBar() {
  const filterCtx = useContext(FilterContext);
  const darkModeCtx = useContext(DarkModeContext);

  function handleChange(e) {
    filterCtx.filterRegion(e.target.value);
  }

  return (
    <>
      <div
        id="filter-bar"
        className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
      >
        <form>
            <select
              name="filter-regions"
              id="filter-regions"
              className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
              value={filterCtx.activeRegion}
              onChange={handleChange}
            >
              <option value="" id="filter-label">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
        </form>
        <FontAwesomeIcon icon={faAngleDown} id="filter-bar-icon" />
      </div>
    </>
  )
}