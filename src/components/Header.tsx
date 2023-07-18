import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <header className="h-50 text-base p-12 flex justify-between max-w-full bg-sky-400">
        <div>
          <p>NashiUsa</p>
        </div>
        <div>
          <Link href="/">Top</Link>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
        </div>
      </header>
    </div>
  )
}
