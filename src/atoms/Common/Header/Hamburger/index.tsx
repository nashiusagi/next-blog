import { MouseEventHandler } from 'react'

type Props = {
  open: boolean
  onClick: MouseEventHandler
  controls: string
  label: string
}

export default function Hamburger({ open, controls, label, onClick }: Props) {
  const content = (open: boolean) => {
    if (open) {
      return (
        <>
          aaa
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w2.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </>
      )
    } else {
      return (
        <>
          <span className="sr-only">Open main menu</span>
          aaa
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </>
      )
    }
  }
  return (
    <>
      <button
        type="button"
        className="z-1000 p-4 overflow-hidden inline-flex items-center  ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls={controls}
        aria-expanded={open}
        aria-label={label}
        data-collapse-toggle={controls}
        onClick={onClick}
      >
        {content(open)}
      </button>
    </>
  )
}
