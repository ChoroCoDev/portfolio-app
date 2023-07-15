import React from 'react'

type Props = {
  title: string
}

export const Title = ({ title }: Props) => {
  return (
    <a href='/' className='font-medium text-gray-900 mb-4 md:mb-0 hover:text-red-400 duration-150'>
      <span className='text-xl ml-3'>{title}</span>
    </a>
  )
}
