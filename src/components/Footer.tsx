import React, { SVGAttributes } from 'react'

export function ArrowUpCircleIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}

export const Footer = () => {
  return (
    <footer className='border-t py-8 mx-auto'>
      <div className='container flex mx-auto flex-col md:flex-row items-center '>
        <h3 className='text-gray-400 md:ml-auto'>© {new Date().getFullYear()} K.Kawa</h3>
        <a href='#home' className='flex hover:text-blue-400 duration-300 md:ml-auto text-base'>
          Page Top
          <ArrowUpCircleIcon className='h-6 w-6 text-gray-500' />
        </a>
      </div>
    </footer>
  )
}
