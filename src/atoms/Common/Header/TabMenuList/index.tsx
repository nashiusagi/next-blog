import Link from 'next/link'
import TabMenuListItem from '@/atoms/Common/Header/TabMenuListItem'

type Props = {
  open: boolean
  id: string
}

export default function TabMenuList({ open, id }: Props) {
  if (open) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <TabMenuListItem link="/" itemName="Home" />
          <TabMenuListItem link="/blog" itemName="Blog" />
        </div>
      </>
    )
  } else {
    return <></>
  }
}
