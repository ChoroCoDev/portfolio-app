import React from 'react'
import { PageTopButton } from '@/components/Footer/PageTopButton'

export const Footer = () => {
  return (
    <footer className='border-t py-8 mx-auto'>
      <div className='container flex mx-auto flex-col md:flex-row items-center '>
        <h3 className='text-gray-400 md:ml-auto'>© {new Date().getFullYear()} K.Kawa</h3>
        <PageTopButton />
      </div>
    </footer>
  )
}

// className='flex  md:ml-auto text-base bg-white-100'
// text-gray-500 hover:text-blue-400 duration-300
