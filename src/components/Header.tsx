import { useState } from 'react'
import Link from 'next/link'
import DarkModeToggler from '@/atoms/Common/DarkModeToggler'
import Hamburger from '@/atoms/Common/Header/Hamburger'
import TabMenuList from '@/atoms/Common/Header/TabMenuList'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleNavigation = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <header className="relative flex-col h-20 my-4">
      <div className="flex justify-end h-full">
        <DarkModeToggler />
        <Hamburger
          open={open}
          controls="navigation"
          label="open menu"
          onClick={toggleNavigation}
        />
      </div>
      <TabMenuList id="navigation" open={open} />
    </header>
  )
}
