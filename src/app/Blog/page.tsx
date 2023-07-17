import { GetStaticProps } from 'next'
import React from 'react'

type UserProps = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

type BlogListProps = {
  users: UserProps[]
}

export const Blog = async (props: BlogListProps) => {
  const { users } = props
  console.log(props)
  return (
    <section id='blog' className='border-t px-5 py-20'>
      Blog
      {users
        ? users.map(({ id, name, email }) => (
            <div key={id}>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          ))
        : null}
    </section>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: UserProps[] = await res.json()
  return {
    props: {
      users: data,
    },
  }
}
