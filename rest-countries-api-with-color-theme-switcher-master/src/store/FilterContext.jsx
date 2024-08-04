import { createContext, useReducer } from "react";
import jsonData from "../../data.json";

const FilterContext = createContext({
  data: [],
  activeSearch: '',
  activeRegion: '',
  filterRegion: (region) => {},
  searchCountries: (userInput) => {},
})

function filterReducer(state, action) {
  if (action.type === "REGION") {
    var filteredData = [];
    if (state.activeSearch == "" || state.activeSearch == undefined) {
      filteredData = jsonData.filter((country) => country.region == action.region);
    } else {
      filteredData = jsonData.filter((country) => country.region == action.region);
      filteredData = filteredData.filter((country) => country.name.startsWith(state.activeSearch));
    }

    return {...state, data: filteredData, activeRegion: action.region}
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

  function filterRegion(region) {
    dispatchFilterAction({ type: "REGION", region })
  }

  function searchCountries(userInput) {
    dispatchFilterAction({ type: "SEARCH", userInput })
  }

  const filterContext = {
    data: filter.data,
    activeSearch: filter.activeSearch,
    activeRegion: filter.activeRegion,
    filterRegion,
    searchCountries,
  };

  return <FilterContext.Provider value={filterContext}>{children}</FilterContext.Provider>
}

export default FilterContext;