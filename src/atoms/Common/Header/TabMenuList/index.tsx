import Link from 'next/link'

type Props = {
  open: boolean
  id: string
}

export default function TabMenuList({ open, id }: Props) {
  if (open) {
    return (
      <>
        <nav id={id} className="my-4">
          <ul className="flex items-center py-4 flex-col space-y-10 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li className="inline-block py-10">
              <Link
                href="/"
                className=" block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>{' '}
      </>
    )
  } else {
    return <></>
  }
}
