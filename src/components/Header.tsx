import React from 'react'

export const Header = () => {
  return (
    <header className='bg-white text-gray-700 border-b sticky top-0 z-50'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href='/' className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>K.Kawate</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href='/' className='mr-5 hover:text-blue-400 duration-300'>
            Home
          </a>
          <a href='#about' className='mr-5 hover:text-blue-400 duration-300'>
            About
          </a>
          <a href='#skills' className='mr-5 hover:text-blue-400 duration-300'>
            Skills
          </a>
          <a href='/Contact' className='hover:text-blue-400 duration-300'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
