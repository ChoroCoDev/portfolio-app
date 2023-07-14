import React, { useMemo } from 'react'

export const Header = () => {
  const items = useMemo(
    () => [
      {
        title: 'Home',
        id: '#home',
      },
      {
        title: 'About',
        id: '#about',
      },
      {
        title: 'Skills',
        id: '#skills',
      },
    ],
    [],
  )
  return (
    <header className='bg-white text-gray-700 border-b sticky top-0 z-50'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href='/' className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>K.Kawa</span>
        </a>
        <nav className='md:ml-auto text-base'>
          {items.map(({ title, id }) => (
            <a key={id} href={id} className='mr-5 hover:text-blue-400 duration-300'>
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
