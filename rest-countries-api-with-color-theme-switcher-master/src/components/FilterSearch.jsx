import { useContext } from "react";

import SearchBar from "./SearchBar"
import FilterBar from "./FilterBar"
import DarkModeContext from '../store/DarkModeContext';

export default function FilterSearch() {
  const darkModeCtx = useContext(DarkModeContext);

  return (
    <div
      id="search-filter-region"
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme-background` : `light-theme-background`}
    >
      <SearchBar />
      <FilterBar />
    </div>
  )
}