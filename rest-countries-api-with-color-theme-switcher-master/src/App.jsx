import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import Countries from './components/Countries'

function App() {

  return (
    <>
      <Header />
      <div id="search-filter-region">
        <SearchBar />
        <FilterBar />
      </div>
      <Countries />
    </>
  )
}

export default App
