import { ReactNode } from "react"

export default function GlassCard({children}) {
  return (
    <div className="bg-[#ffffff]/[0.2] w-4/5 p-8 backdrop-blur rounded-md mb-8">
      {children}
    </div>
  )
}
