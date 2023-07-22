type Props = {
  dailyContent: string[]
}

export default function DailyList({ dailyContent }: Props) {
  const dailyList = dailyContent.map((content: string, index: number) => {
    return <li key={index}>{content}</li>
  })

  return (
    <>
      <h3 className="text-xl font-bold">【★★☆】 Daily</h3>
      <ul className="list-disc ml-12 mb-4">{dailyList}</ul>
    </>
  )
}
