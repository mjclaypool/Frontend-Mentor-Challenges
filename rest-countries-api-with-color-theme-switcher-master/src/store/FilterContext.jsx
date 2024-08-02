import { createContext, useReducer } from "react";
import jsonData from "../../data.json";

const FilterContext = createContext({
  data: [],
  filterAfrica: () => {},
  filterAmericas: () => {},
  filterAsia: () => {},
  filterEurope: () => {},
  filterOceania: () => {},
})

function filterReducer(state, action) {
  if (action.type === "AFRICA") {
    const filteredData = jsonData.filter((country) => country.region == "Africa");

    return {...state, data: filteredData}
  }
  if (action.type === "AMERICAS") {
    const filteredData = jsonData.filter((country) => country.region == "Americas");

    return {...state, data: filteredData}
  }
  if (action.type === "ASIA") {
    const filteredData = jsonData.filter((country) => country.region == "Asia");

    return {...state, data: filteredData}
  }
  if (action.type === "EUROPE") {
    const filteredData = jsonData.filter((country) => country.region == "Europe");

    return {...state, data: filteredData}
  }
  if (action.type === "OCEANIA") {
    const filteredData = jsonData.filter((country) => country.region == "Oceania");

    return {...state, data: filteredData}
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

  const filterContext = {
    data: filter.data,
    filterAfrica,
    filterAmericas,
    filterAsia,
    filterEurope,
    filterOceania,
  };

  return <FilterContext.Provider value={filterContext}>{children}</FilterContext.Provider>
}

export default FilterContext;