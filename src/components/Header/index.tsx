import React, { useMemo } from 'react'
import { Title } from './Title'
import { NavBar } from '@/components/Header/NavBar'

export const Header = () => {
  const items = useMemo(
    () => [
      {
        title: 'Home',
        link: '#home',
      },
      {
        title: 'About',
        link: '#about',
      },
      {
        title: 'Skills',
        link: '#skills',
      },
    ],
    [],
  )
  return (
    <header className='bg-white text-gray-700 border-b sticky top-0 z-50'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <Title title='K.Kawa' />
        <NavBar items={items} />
      </div>
    </header>
  )
}
