import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import Countries from './components/Countries'
import { CountryContextProvider } from './store/CountryContext';
import { FilterContextProvider } from './store/FilterContext';

function App() {

  return (
    <FilterContextProvider>
      <CountryContextProvider>
        <Header />
        <div id="search-filter-region">
          <SearchBar />
          <FilterBar />
        </div>
        <Countries />
      </CountryContextProvider>
    </FilterContextProvider>
  )
}

export default App
