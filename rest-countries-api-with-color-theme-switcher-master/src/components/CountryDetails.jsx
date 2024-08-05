import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DarkModeContext from "../store/DarkModeContext";

export default function CountryDetails() {
  const darkModeCtx = useContext(DarkModeContext);
  const [data, setData] = useState();
  const [borderData, setBorderData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() =>{fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true&fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`, {})
    .then((res) => res.json())
    .then((response) => {
      setData(response[0]);
      if(response[0].borders.length != 0){
        fetch(`https://restcountries.com/v3.1/alpha?codes=${formatBorders(response[0].borders)}&fields=name`, {})
        .then((res) => res.json())
        .then((response) => {
          setBorderData(response);
          setIsLoading(false);
      })
      }else{
        setIsLoading(false);
      }
    })
    .catch((error) => console.log(error));

  }, [params.country])

  let topLevelDomainAsString = "";
  let currenciesAsString = "";
  let languagesAsString = "";
  let formattedPopulation = "";

  function formatBorders(borders) {
    let borderCodes = ''
    for (var i=0; i<borders.length; i++) {
      borderCodes += borders[i] + ",";
    }
    return borderCodes
  }

  function formatTLD() {
    topLevelDomainAsString = data.tld[0];
    for (var i=1; i<data.tld.length; i++) {
      topLevelDomainAsString = topLevelDomainAsString + ", " + data.tld[i];
    }
    return topLevelDomainAsString;
  }

  function formatCurr() {
    var currencies = Object.keys(data.currencies);
    if (currencies.length!=0){
      currenciesAsString = data.currencies[currencies[0]].name;
      for (var i=1; i<currencies.length; i++) {
        currenciesAsString = currenciesAsString + ", " + data.currencies[currencies[i]].name;
      }
    }
    return currenciesAsString;
  }

  function formatLang() {
    var langs =  Object.keys(data.languages);
    languagesAsString = data.languages[langs[0]];
    for (var i=1; i<langs.length; i++) {
      languagesAsString = languagesAsString + ", " + data.languages[langs[i]];
    }
    return languagesAsString;
  }

  function formatPop() {
    formattedPopulation = data.population.toString();
    for (var i=formattedPopulation.length-3; i>0; i=i-3) {
      formattedPopulation = formattedPopulation.substring(0,i) + "," + formattedPopulation.substring(i,formattedPopulation.length)
    }
    return formattedPopulation;
  }


  return (
    <div
      id="country-details-section"
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
    >
      <div id="country-details-back-btn">
        <Link
          to="/"
          type="button"
          className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
        >
          Back
        </Link>
      </div>
      {!isLoading &&
      <div id="country-details">
        <img src={data.flags.png} id="country-details-flag" />
        <div id="country-details-main">
          <h1>{data.name.common}</h1>
          <div id="country-details-stats">
            <div className="country-details-column">
              <h3>Official Name: {data.name.official}</h3>
              <h3>Population: {formatPop()}</h3>
              <h3>Region: {data.region}</h3>
              <h3>Sub Region: {data.subregion}</h3>
              <h3>Capital: {data.capital}</h3>
            </div>
            <div className="country-details-column">
              <h3>Top Level Domain: {formatTLD()}</h3>
              <h3>Currencies: {formatCurr()}</h3>
              <h3>Languages: {formatLang()}</h3>
            </div>
          </div>
          <div id="country-details-borders">
            <h3>Border Countries: </h3>
            {data.borders.length!=0 && borderData.map(neighbor => (
              <Link
                to={`/${neighbor.name.common}`}
                key={neighbor.name.common}
                type="button"
                className={darkModeCtx.mode == 'Dark Mode' ? `country-details-border-btn dark-theme` : `country-details-border-btn light-theme`}
              >
                {neighbor.name.common}
              </Link>
            ))}
            {data.borders.length==0 && <p>None</p>}
          </div>
        </div>
      </div>
      }
    </div>
  )
}