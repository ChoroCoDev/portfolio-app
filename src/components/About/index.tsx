import React, { useMemo } from 'react'
import { DeveloperCard } from '@/components/About/DeveloperCard'

export const About = () => {
  const cardUtils = useMemo(
    () => [
      {
        title: 'Manager',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, possimus.',
      },
      {
        title: 'Director',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur, incidunt sit harum culpa aliquam!',
      },
      {
        title: 'Web Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur vitae nisi.',
      },
    ],
    [],
  )
  return (
    <section className='text-gray-700 border-t border-gray-200 ' id='about'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis consequatur cumque totam ratione maxime
            provident cum quo tempora iure aliquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque totam pariatur consequuntur, dolorem at
            consectetur voluptatibus amet aliquid! Aperiam aspernatur, maiores fugiat totam architecto sapiente tempora
            laudantium, doloribus adipisci provident voluptates consequuntur amet alias dolor odit. Voluptates quae ad
            aliquam adipisci accusantium nisi repellendus officia maxime repellat neque ut nostrum necessitatibus
            reprehenderit mollitia id, consequatur harum itaque pariatur libero ab corporis quaerat quas nihil nam. Id
            repellat sed facere corrupti a? Quis repellat aperiam error ducimus nisi accusantium aut sequi nostrum
            officia aspernatur, ratione id, voluptatem iusto? Voluptatem sunt ad, sed explicabo culpa quod quas quae
            excepturi nobis consequuntur possimus voluptas recusandae reiciendis. Nisi iste accusantium illum atque
            facilis asperiores inventore laudantium sit aperiam modi. Recusandae aut nostrum nobis accusamus ullam ab
            fugit quaerat voluptate, suscipit repellat, est voluptates quia perspiciatis et in perferendis odio, culpa
            architecto! Magni a numquam reprehenderit tenetur rem, officiis exercitationem. Labore earum tempore harum
            hic enim pariatur exercitationem optio cumque architecto quasi delectus facere nostrum dicta reprehenderit
            numquam fugit porro laborum sed obcaecati, recusandae vero! Quidem eveniet velit assumenda alias unde dicta,
            ab veritatis aspernatur voluptatibus at, aut facere expedita, pariatur amet distinctio sapiente vel aperiam
            tenetur. Officiis consequuntur facere repellat dolorem explicabo mollitia voluptatum.
          </p>
        </div>
        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>
          {cardUtils.map((cardUtil, index) => (
            <DeveloperCard {...cardUtil} key={'developer-card-' + index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { DeveloperCard }
