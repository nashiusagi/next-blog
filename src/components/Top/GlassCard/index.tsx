import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function GlassCard({ children }: Props) {
  return (
    <div className="bg-[#ffffff]/[0.2] w-4/5 p-8 backdrop-blur rounded-md mb-8">
      {children}
    </div>
  )
}
