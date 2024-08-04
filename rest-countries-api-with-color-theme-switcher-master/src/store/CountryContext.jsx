import { useState, createContext } from "react";
import jsonData from "../../data.json";

const CountryContext = createContext({
  country: '',
  showCountry: (name) => {},
  hideCountry: () => {},
  showNeighbor: (neighbor) => {},
});

export function CountryContextProvider({children}) {
  const [selectedCountry, setSelectedCountry] = useState('');

  function showCountry(name) {
    setSelectedCountry(name);
  }

  function hideCountry() {
    setSelectedCountry('');
  }

  function showNeighbor(neighbor) {
    const selectedNeighbor = jsonData.filter((country) => country.alpha3Code == neighbor);
    setSelectedCountry(selectedNeighbor[0]);
  }

  const countryCtx = {
    country: selectedCountry,
    showCountry,
    hideCountry,
    showNeighbor,
  };

  return <CountryContext.Provider value={countryCtx}>{children}</CountryContext.Provider>
}

export default CountryContext;