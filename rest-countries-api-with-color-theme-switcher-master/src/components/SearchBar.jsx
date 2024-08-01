import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
    <div id="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} id="search-bar-icon" />
      <form>
        <input type="search" id="search-input" placeholder='Search for a country...' />
      </form>
    </div>
  )
}