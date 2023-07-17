'use client'
import React from 'react'
import { CodeBracketIcon } from '@/components/Icons'

type Props = {
  articles?: ArticleProps[]
}

export const Blog = (props: Props) => {
  const { articles } = props
  return (
    <section id='blog' className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto items-center'>
        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-5 text-center lg:text-left'>My Blogs</h1>
        {!articles || articles.length === 0 ? (
          <p>Zennへの投稿はありません。</p>
        ) : (
          articles.map(({ id, title, slug, path }) => (
            <div className='md:w-1/2 p-4' key={id}>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3 px-1 py-1'>
                  <div className='bg-green-500 text-white rounded-full px-1 py-1'>
                    <CodeBracketIcon className='h-4 w-4 text-white' />
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    <a
                      href={`https://zenn.dev${path}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-green-700 duration-300'>
                      {title}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Blog
