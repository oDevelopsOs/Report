'use client'

import { useLanding, Shift } from './store/landing';
import Link from 'next/link';
// import Link from 'next/link';

export default function Home() {
  const setName = useLanding((state) => state.setName);
  const setShift = useLanding((state) => state.setShift);
  
  const name = useLanding((state) => state.name);
  const shift = useLanding((state) => state.shift);

  return (
    <section className="flex justify-center items-center content-center h-screen w-full  ">
      <div className="h-[40rem] w-[90%] bg-white mx-auto my-auto flex flex-row rounded-2xl relative">
        <div className='w-1/2 h-full text-center p-16 content-center'>
          <p className='text-3xl font-semibold text-[#5E5E5E]'>
            "Please kindly fill out the form to submit your daily report. Your cooperation is greatly appreciated! 😊"
          </p>
        </div>
        <div className='h-5/6 w-[0.1px] bg-[#5E5E5E] my-auto'></div>
        <div className='w-1/2 flex flex-col h-full items-center content-center gap-6 align-middle justify-center'>
          {/* Input para el nombre */}
          <input
            className='h-20 w-96 rounded-2xl text-center text-xl font-semibold border-2 border-black outline-none  '
            type="text"
            placeholder="Write your name ..."
            value={name}
            onChange={(e) => setName(e.target.value)} // Actualiza el nombre
          />

          {/* Selector para el turno */}
          <select className='h-20 w-96 rounded-2xl text-center text-xl font-semibold border-2 border-black outline-none'
            value={shift}
            onChange={(e) => setShift(e.target.value as Shift)}
          >
            <option value={Shift.Morning}>Morning</option>
            <option value={Shift.Afternoon}>Afternoon</option>
            <option value={Shift.Evening}>Evening</option>
          </select>
        </div>
        <Link href={"./Emails"} className='h-16 w-60 bg-black text-white text-center content-center rounded-2xl absolute bottom-6 right-6 active:bg-white active:text-black hover:shadow-lg hover:shadow-gray-400 active:border-black active:border-2' >
            Next
        </Link>
      </div>
    </section>
  );
}
