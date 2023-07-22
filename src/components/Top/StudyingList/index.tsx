type Props = {
  studyingContent: string[]
}

export default function StudyingList({ studyingContent }: Props) {
  const studyingList = studyingContent.map((content: string, index: number) => {
    return <li key={index}>{content}</li>
  })
  return (
    <>
      <h3 className="text-xl font-bold">【☆☆☆】Studying</h3>
      <ul className="list-disc ml-12 mb-4">{studyingList}</ul>
    </>
  )
}
