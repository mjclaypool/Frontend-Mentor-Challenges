import { useContext } from "react";
import CountryContext from "../store/CountryContext";
import DarkModeContext from "../store/DarkModeContext";

export default function CountryCard( {country} ) {
  const countryCtx = useContext(CountryContext);
  const darkModeCtx = useContext(DarkModeContext);

  let formattedPopulation = country.population.toString();
  for (var i=formattedPopulation.length-3; i>0; i=i-3) {
    formattedPopulation = formattedPopulation.substring(0,i) + "," + formattedPopulation.substring(i,formattedPopulation.length)
  }

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
        <h3>Population: {formattedPopulation}</h3>
        <h3>Region: {country.region}</h3>
        <h3>Capital: {country.capital}</h3>
      </div>
    </div>
  )
}