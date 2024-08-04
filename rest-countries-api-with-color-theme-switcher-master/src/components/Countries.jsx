import { useContext } from 'react';
import CountryCard from './CountryCard'
import FilterContext from '../store/FilterContext';
import CountryContext from '../store/CountryContext';
import DarkModeContext from '../store/DarkModeContext';
import CountryDetails from './CountryDetails';

export default function Countries() {
  const filterCtx = useContext(FilterContext);
  const countryCtx = useContext(CountryContext);
  const darkModeCtx = useContext(DarkModeContext);

  return (
    <div
      id="countries-section-background"
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
    >
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
        : <CountryDetails />
      }
    </div>
  )
}