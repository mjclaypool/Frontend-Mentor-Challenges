import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContext from "../store/DarkModeContext";


export default function CountryCard( {country} ) {
  const darkModeCtx = useContext(DarkModeContext);

  let formattedPopulation = country.population.toString();
  for (var i=formattedPopulation.length-3; i>0; i=i-3) {
    formattedPopulation = formattedPopulation.substring(0,i) + "," + formattedPopulation.substring(i,formattedPopulation.length)
  }

  return (
    <Link
      to={`/${country.name.common}`}
      className={darkModeCtx.mode == 'Dark Mode' ? `card dark-theme` : `card light-theme`}
    >
      <img className="flag" src={country.flags.png} />
      <div className="card-overview">
        <h2>{country.name.common}</h2>
        <h3>Population: {formattedPopulation}</h3>
        <h3>Region: {country.region}</h3>
        <h3>Capital: {country.capital}</h3>
      </div>
    </Link>
  )
}