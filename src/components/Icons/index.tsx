import React, { SVGAttributes } from 'react'

export const CodeBracketIcon = (props: SVGAttributes<SVGElement>) => {
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
        d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
      />
    </svg>
  )
}

export const ArrowRightIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
    </svg>
  )
}

export const ArrowUpCircleIcon = (props: SVGAttributes<SVGElement>) => {
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
