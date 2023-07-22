type Props = {
  userName: string
  link: string
}

export default function TwitterButton(props: Props) {
  return (
    <>
      <a
        href={props.link}
        className="text-white text-xs font-bold leading-3 relative mb-4 px-2 py-2.5 cursor-pointer select-none transition text-center align-middle rounded bg-sky-500 hover:bg-sky-700 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow @{props.userName}
      </a>
    </>
  )
}
