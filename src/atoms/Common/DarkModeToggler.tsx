import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('dark-mode-setting')
      : 'light',
  )

  const toggle = () => setIsDarkMode(isDarkMode === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    if (isDarkMode === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('dark-mode-setting', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('dark-mode-setting', 'light')
    }
  }, [isDarkMode])

  return (
    <div>
      <button className="p-2" onClick={toggle}>
        {isDarkMode === 'dark' ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  )
}
