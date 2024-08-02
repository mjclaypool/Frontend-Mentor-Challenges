import { useContext } from 'react';
import CountryCard from './CountryCard'
import CountryDetails from './CountryDetails';
import CountryContext from '../store/CountryContext';

import data from '../../data.json';

export default function Countries() {
  const countryCtx = useContext(CountryContext);

  return (
    <>
      {countryCtx.country == '' ?
      <div className="countries-section">
        {data.map(country => (
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