'use client'
import React from 'react'
import { Button } from '@material-tailwind/react'

export const PageTopButton = () => {
  return (
    <a href='#top' className='flex md:ml-auto'>
      <Button variant='text' className='flex text-gray-500 hover:text-blue-400 duration-300 text-base'>
        Page Top
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </Button>
    </a>
  )
}
