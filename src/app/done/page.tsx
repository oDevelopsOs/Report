'use client'
import React, { useEffect } from 'react'
import { useLanding } from '../store/landing';
import Image from 'next/image';
import done from "../../../public/otro/done.png"



export default function Page() {
      const name = useLanding((state) => state.name);
      const setName = useLanding((state) => state.setName);
      function redirect (){
        setTimeout(() => {
         window.location.href = '/';
         setName('')
        }, 3000);
      }
      useEffect(() => {
        redirect();
      }, [])

  return (
    <section className=" h-screen flex flex-col items-center justify-center">
        <h1 className='text-gray-600 font-semibold text-6xl'>Thanks <span className='text-black'>{name}</span> Report Done</h1>
        <Image className='py-10' src={done} alt="done" width={500} height={600} />
    </section>
  )
}
