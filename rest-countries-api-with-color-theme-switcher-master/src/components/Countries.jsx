import { useContext } from 'react';
import CountryCard from './CountryCard'
import CountryDetails from './CountryDetails';
import CountryContext from '../store/CountryContext';
import FilterContext from '../store/FilterContext';
import DarkModeContext from '../store/DarkModeContext';

// import data from '../../data.json';

export default function Countries() {
  const countryCtx = useContext(CountryContext);
  const filterCtx = useContext(FilterContext);
  const darkModeCtx = useContext(DarkModeContext);

  return (
    <>
      {countryCtx.country == '' ?
      <div
        id="countries-section"
        className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
      >
        {filterCtx.data.map(country => (
          <CountryCard
            key={country.name}
            country={country}
          />
        ))}
      </div>
      : <CountryDetails />}
    </>
  )
}