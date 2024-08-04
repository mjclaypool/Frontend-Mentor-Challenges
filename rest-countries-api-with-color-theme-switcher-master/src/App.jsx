import { CountryContextProvider } from './store/CountryContext';
import { FilterContextProvider } from './store/FilterContext';
import { DarkModeContextProvider } from './store/DarkModeContext';
import Header from './components/Header';
import FilterSearch from './components/FilterSearch';
import Countries from './components/Countries';

function App() {

  return (
    <DarkModeContextProvider>
      <FilterContextProvider>
        <CountryContextProvider>
          <Header />
          <FilterSearch />
          <Countries />
        </CountryContextProvider>
      </FilterContextProvider>
    </DarkModeContextProvider>
  )
}

export default App
