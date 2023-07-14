import React from 'react'

export const Main = () => {
  return (
    <section className='text-gray-700' id='home'>
      <div className='container flex mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>
            Hi!
            <br />
            I'm K.Kawa
            <br />
            Web Developer
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, pariatur? Corporis quisquam voluptas eum,
            culpa id itaque consequatur veritatis rerum.
          </p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>
            Contact
          </button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src='./img/hello_world.jpg' alt='' />
        </div>
      </div>
    </section>
  )
}