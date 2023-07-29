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
    <>
      <a
        className="w-10 h-10 p-4 overflow-hidden inline-flex items-center ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggle}
      >
        {isDarkMode === 'dark' ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </a>
    </>
  )
}
