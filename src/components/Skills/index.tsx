import Image from 'next/image'
import React, { useMemo } from 'react'
import { SkillCard } from './SkillCard'

export const Skills = () => {
  const skillUtils = useMemo(
    () => [
      {
        title: 'HTML',
        level: 60,
      },
      {
        title: 'CSS',
        level: 50,
      },
      {
        title: 'JavaScript',
        level: 85,
      },
      {
        title: 'TypeScript',
        level: 70,
      },
      {
        title: 'jQuery',
        level: 50,
      },
      {
        title: 'React',
        level: 80,
      },
      {
        title: 'Next.js',
        level: 40,
      },
    ],
    [],
  )
  return (
    <section className='text-gray-700 border-t border-gray-200' id='skills'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
        {/* left side */}
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <Image src='/img/studypc.jpg' alt='' className='rounded' width={640} height={427} />
        </div>
        {/* right side */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-5 text-center lg:text-left'>My Skills</h1>
          {skillUtils.map((skillUtil, index) => (
            <SkillCard {...skillUtil} key={'skill-card-' + index} />
          ))}
        </div>
      </div>
    </section>
  )
}
