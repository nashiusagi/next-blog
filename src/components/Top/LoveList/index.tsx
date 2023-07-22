type Props = {
  loveContent: string[]
}

export default function LoveList({ loveContent }: Props) {
  const loveList = loveContent.map((content: string, index: number) => {
    return <li key={index}>{content}</li>
  })

  return (
    <>
      <h3 className="text-xl font-bold">【★★★】 Love</h3>
      <ul className="list-disc ml-12 mb-4">{loveList}</ul>
    </>
  )
}
