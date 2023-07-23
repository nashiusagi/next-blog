import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

type Props = {
  userName: string
  link: string
}

export default function TwitterButton(props: Props) {
  return (
    <>
      <a
        href={props.link}
        className="p-2 text-white text-xs font-bold leading-3 relative mb-4 px-2 py-2.5 cursor-pointer select-none transition text-center align-middle rounded bg-sky-500 hover:bg-sky-700 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
        <span className="p-2">Follow @{props.userName}</span>
      </a>
    </>
  )
}
