import { useContext } from "react"
import CountryContext from "../store/CountryContext"
import DarkModeContext from "../store/DarkModeContext";

export default function CountryDetails() {
  const countryCtx = useContext(CountryContext);
  const darkModeCtx = useContext(DarkModeContext);

  let topLevelDomainAsString = countryCtx.country.topLevelDomain[0];
  for (var i=1; i<countryCtx.country.topLevelDomain.length; i++) {
    topLevelDomainAsString = topLevelDomainAsString + ", " + countryCtx.country.topLevelDomain[i];
  }

  let currenciesAsString = countryCtx.country.currencies[0].name;
  for (var i=1; i<countryCtx.country.currencies.length; i++) {
    currenciesAsString = currenciesAsString + ", " + countryCtx.country.currencies[i].name;
  }

  let languagesAsString = countryCtx.country.languages[0].name;
  for (var i=1; i<countryCtx.country.languages.length; i++) {
    languagesAsString = languagesAsString + ", " + countryCtx.country.languages[i].name;
  }

  function closeDetails() {
    countryCtx.hideCountry();
  }

  return (
    <div
      id="country-details-section"
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
    >
      <div id="country-details-back-btn">
        <button
          type="button"
          className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
          onClick={closeDetails}
        >
          Back
        </button>
      </div>
      <div id="country-details">
        <img src={countryCtx.country.flags.png} id="country-details-flag" />
        <div id="country-details-main">
          <h1>{countryCtx.country.name}</h1>
          <div id="country-details-stats">
            <div className="country-details-column">
              <h3>Native Name: {countryCtx.country.nativeName}</h3>
              <h3>Population: {countryCtx.country.population}</h3>
              <h3>Region: {countryCtx.country.region}</h3>
              <h3>Sub Region: {countryCtx.country.subregion}</h3>
              <h3>Capital: {countryCtx.country.capital}</h3>
            </div>
            <div className="country-details-column">
              <h3>Top Level Domain: {topLevelDomainAsString}</h3>
              <h3>Currencies: {currenciesAsString}</h3>
              <h3>Languages: {languagesAsString}</h3>
            </div>
          </div>
          <div id="country-details-borders">
            <h3>Border Countries: </h3>
            {countryCtx.country.borders && countryCtx.country.borders.map(neighbor => (
              <button
                key={neighbor}
                type="button"
                className={darkModeCtx.mode == 'Dark Mode' ? `country-details-border-btn dark-theme` : `country-details-border-btn light-theme`}
              >
                {neighbor}
              </button>
            ))}
            {!countryCtx.country.borders && <p>None</p>}
          </div>
        </div>
      </div>
    </div>
  )
}