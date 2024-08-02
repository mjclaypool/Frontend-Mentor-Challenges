import { useContext } from "react";
import CountryContext from "../store/CountryContext";
import DarkModeContext from "../store/DarkModeContext";

export default function CountryCard( {country} ) {
  const countryCtx = useContext(CountryContext);
  const darkModeCtx = useContext(DarkModeContext);

  function handleChooseCountry(country) {
    countryCtx.showCountry(country);
  }

  return (
    <div
      className={darkModeCtx.mode == 'Dark Mode' ? `card dark-theme` : `card light-theme`}
      onClick={() => handleChooseCountry(country)}
    >
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