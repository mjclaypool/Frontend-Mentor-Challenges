import { useContext } from "react";
import CountryContext from "../store/CountryContext";

export default function CountryCard( {country} ) {
  const countryCtx = useContext(CountryContext);

  function handleChooseCountry(country) {
    countryCtx.showCountry(country);
  }

  return (
    <div className="card" onClick={() => handleChooseCountry(country)}>
      <img className="flag" src={country.flags.png} />
      <div className="card-overview">
        <h2>{country.name}</h2>
        <h3>Population: {country.population}</h3>
        <h3>Region: {country.region}</h3>
        <h3>Capital: {country.capital}</h3>
      </div>
    </div>
  )
}