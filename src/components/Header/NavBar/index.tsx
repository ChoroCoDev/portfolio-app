import React from 'react'

type ItemProps = {
  title: string
  link: string
}

type Props = {
  items: ItemProps[]
}

export const NavBar = ({ items }: Props) => {
  return (
    <nav className='md:ml-auto text-base'>
      {items.map(({ title, link }, index) => (
        <a key={'navbar-' + index} href={link} className='mr-5 hover:text-blue-400 duration-300 '>
          {title}
        </a>
      ))}
    </nav>
  )
}
