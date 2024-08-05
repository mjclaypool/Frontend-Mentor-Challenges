import { useContext } from 'react';
import CountryCard from './CountryCard'
import FilterContext from '../store/FilterContext';
import DarkModeContext from '../store/DarkModeContext';

export default function Countries() {
  const filterCtx = useContext(FilterContext);
  const darkModeCtx = useContext(DarkModeContext);

  return (
    <div
      id="countries-section-background"
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
    >
      <div
        id="countries-section"
        className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
      >
        {filterCtx.visibleData.map(country => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    </div>
  )
}