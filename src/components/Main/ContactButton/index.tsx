'use client'
import React, { useState } from 'react'
import { Button, Dialog, DialogBody } from '@material-tailwind/react'
import Link from 'next/link'

export const ContactButton = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <Button
        onClick={handleOpen}
        className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>
        Contact
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          <iframe
            title='Contact Web Form'
            src='https://docs.google.com/forms/d/e/1FAIpQLSdU3vNpyEqEM395osUJt9TqbhiXgl7UMYXaBcCrc-IxqhY5Ag/viewform?embedded=true'
            className='w-full md:h-[48rem]'>
            読み込んでいます…
          </iframe>
        </DialogBody>
      </Dialog>
    </>
  )
}
