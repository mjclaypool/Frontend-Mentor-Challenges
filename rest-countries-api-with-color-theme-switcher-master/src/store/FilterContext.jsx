import { createContext, useReducer } from "react";
import jsonData from "../../data.json";

const FilterContext = createContext({
  data: [],
  activeSearch: '',
  activeRegion: '',
  filterAfrica: () => {},
  filterAmericas: () => {},
  filterAsia: () => {},
  filterEurope: () => {},
  filterOceania: () => {},
  searchCountries: (userInput) => {},
})

function filterReducer(state, action) {
  if (action.type === "AFRICA") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == "Africa");
    } else {
      filteredData = jsonData.filter((country) => country.region == "Africa");
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: "Africa"}
  }
  if (action.type === "AMERICAS") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == "Americas");
    } else {
      filteredData = jsonData.filter((country) => country.region == "Americas");
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: "Americas"}
  }
  if (action.type === "ASIA") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == "Asia");
    } else {
      filteredData = jsonData.filter((country) => country.region == "Asia");
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: "Asia"}
  }
  if (action.type === "EUROPE") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == "Europe");
    } else {
      filteredData = jsonData.filter((country) => country.region == "Europe");
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: "Europe"}
  }
  if (action.type === "OCEANIA") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == "Oceania");
    } else {
      filteredData = jsonData.filter((country) => country.region == "Oceania");
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: "Oceania"}
  }
  if (action.type === "SEARCH") {
    var filteredData = [];
    if (state.activeRegion == undefined) {
      filteredData = jsonData.filter((country) => country.name.startsWith(action.userInput));
    } else {
      filteredData = jsonData.filter((country) => country.region == state.activeRegion);
      filteredData = filteredData.filter((country) => country.name.startsWith(action.userInput));
    }

    return {...state, data: filteredData, activeSearch: action.userInput}
  }

  return state;
};

export function FilterContextProvider({children}) {
  const [filter, dispatchFilterAction] = useReducer(filterReducer, { data: jsonData });

  function filterAfrica() {
    dispatchFilterAction({ type: "AFRICA" });
  }

  function filterAmericas() {
    dispatchFilterAction({ type: "AMERICAS" });
  }

  function filterAsia() {
    dispatchFilterAction({ type: "ASIA" });
  }

  function filterEurope() {
    dispatchFilterAction({ type: "EUROPE" });
  }

  function filterOceania() {
    dispatchFilterAction({ type: "OCEANIA" });
  }

  function searchCountries(userInput) {
    dispatchFilterAction({ type: "SEARCH", userInput })
  }

  const filterContext = {
    data: filter.data,
    activeSearch: filter.activeSearch,
    activeRegion: filter.activeRegion,
    filterAfrica,
    filterAmericas,
    filterAsia,
    filterEurope,
    filterOceania,
    searchCountries,
  };

  return <FilterContext.Provider value={filterContext}>{children}</FilterContext.Provider>
}

export default FilterContext;