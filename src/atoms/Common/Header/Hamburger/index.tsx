import { MouseEventHandler } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

type Props = {
  open: boolean
  onClick: MouseEventHandler
  controls: string
  label: string
}

export default function Hamburger({ open, controls, label, onClick }: Props) {
  const content = open ? (
    <FontAwesomeIcon icon={faXmark} />
  ) : (
    <FontAwesomeIcon icon={faBars} />
  )
  return (
    <>
      <button
        type="button"
        className="z-1000 p-8 overflow-hidden inline-flex items-center  ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls={controls}
        aria-expanded={open}
        aria-label={label}
        data-collapse-toggle={controls}
        onClick={onClick}
      >
        {content}
      </button>
    </>
  )
}
