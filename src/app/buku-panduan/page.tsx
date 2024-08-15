import Image from 'next/image'
import React from 'react'

const BukuPanduan = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-14 relative'>
        <Image
            src='https://jbymoblt3fzt0jez.public.blob.vercel-storage.com/logo-infest-usk.webp'
            width={500}
            height={500}
            className='w-1/12 absolute top-[20%]'
            alt='logo-infest-usk'
        />        
        <p className='font-bold text-white pr-2 text-7xl font-cattedrale tracking-wide'>SOON</p>
    </div>
  )
}

export default BukuPanduan