import { useContext } from 'react';
import DarkModeContext from '../store/DarkModeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const darkModeCtx = useContext(DarkModeContext);

  function handleClick() {
    darkModeCtx.toggleDarkMode();
  }

  return (
    <div
      id='header-section'
      className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
    >
      <h1>Where in the world?</h1>
      <button
        type="button"
        id="mode-switch"
        className={darkModeCtx.mode == 'Dark Mode' ? `dark-theme` : `light-theme`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faMoon} id="mode-switch-icon" />
        {darkModeCtx.mode}
      </button>
    </div>
  )
}