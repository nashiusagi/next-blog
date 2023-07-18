import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <div className="top-0 sticky z-50 left-0 right-0" >
        <Header />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>blogだぬ</div>
      </main>
    </div>
  )
}
