import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div id="header-section">
      <h1>Where in the world?</h1>
      <button type="button" id="mode-switch"><FontAwesomeIcon icon={faMoon} id="mode-switch-icon" />Dark Mode</button>
    </div>
  )
}