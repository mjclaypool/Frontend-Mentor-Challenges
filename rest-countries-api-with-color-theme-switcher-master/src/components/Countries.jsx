import { useContext } from 'react';
import CountryCard from './CountryCard'
import CountryDetails from './CountryDetails';
import CountryContext from '../store/CountryContext';
import FilterContext from '../store/FilterContext';

// import data from '../../data.json';

export default function Countries() {
  const countryCtx = useContext(CountryContext);
  const filterCtx = useContext(FilterContext);

  return (
    <>
      {countryCtx.country == '' ?
      <div className="countries-section">
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