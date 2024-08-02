import { useState, createContext } from "react";

const CountryContext = createContext({
  country: '',
  showCountry: (name) => {},
  hideCountry: () => {},
});

export function CountryContextProvider({children}) {
  const [selectedCountry, setSelectedCountry] = useState('');

  function showCountry(name) {
    setSelectedCountry(name);
  }

  function hideCountry() {
    setSelectedCountry('');
  }

  const countryCtx = {
    country: selectedCountry,
    showCountry,
    hideCountry,
  };

  return <CountryContext.Provider value={countryCtx}>{children}</CountryContext.Provider>
}

export default CountryContext;