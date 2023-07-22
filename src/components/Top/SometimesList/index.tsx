type Props = {
  sometimesContent: string[]
}

export default function SometimesList({ sometimesContent }: Props) {
  const sometimesList = sometimesContent.map(
    (content: string, index: number) => {
      return <li key={index}>{content}</li>
    },
  )
  return (
    <>
      <h3 className="text-xl font-bold">【★☆☆】Sometimes</h3>
      <ul className="list-disc ml-12 mb-4">{sometimesList}</ul>
    </>
  )
}
