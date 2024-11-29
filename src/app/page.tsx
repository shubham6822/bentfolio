import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


export default function page() {
  return (
    <div className="h-screen w-full p-5 flex flex-col lg:overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row w-full gap-5">
        <div className='lg:w-4/6 flex gap-5 flex-col w-full '>
          <Section1 />
          <Section2 />
        </div>
        <Aside />
      </main>
    </div>

  )
}

function Header() {
  return (
    <header className='w-full bg-primary h-[101px] rounded-2xl flex items-center justify-between p-7 mb-5'>
      <h1 className='lg:text-4xl font-gilroy-italic flex gap-2 text-lg'>
        Ajay <p className='font-gilroy-semibold'>Kumawat</p>
      </h1>
      <nav>
        <ul className='lg:flex gap-16 items-center font-gilroy-regular hidden lg:visible'>
          <li className='text-lg '>Projects</li>
          <li className='text-lg '>About</li>
          <li className='text-lg '>Contact</li>
        </ul>
      </nav>
    </header>
  )

}

function Section1() {
  return (
    <div className='lg:h-2/4 flex  flex-col gap-5 lg:flex-row'>
      <div className='bg-primary lg:w-2/3 rounded-2xl p-5 flex flex-col justify-between'>
        <div className='flex justify-end'>
          <Image src="/Flower.svg" width={100} height={100} alt='ajay' />
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='lg:text-5xl font-gilroy-italic text-3xl'>Hello, I&apos;m Ajay Kumawat</h1>
          <p className='lg:text-2xl font-gilroy-regular text-xl'>I&apos;m a Backend developer at Elemensis Softech LLP. I love to create functional websites.</p>
        </div>
      </div>
      <div className='lg:w-1/3'>
        <Image src={'/Ajay.png'} width={100} height={100} alt='ajay' quality={100} unoptimized={true} className='w-full h-full' />
      </div>
    </div>
  )
}

function Section2() {
  return (
    <div className=' h-2/4 flex  flex-col gap-5 lg:flex-row '>
      <div className='bg-primary lg:w-2/4 rounded-2xl p-5 flex flex-col justify-between lg:h-full gap-10 lg:gap-0'>
        <Image src={'/flower2.svg'} width={100} height={100} alt='ajay' quality={100} unoptimized={true} />
        <p className='font-gilroy-regular lg:pr-20 pb-5 text-xl'>
          A Senior Backend Developer is a skilled professional specializing in the server-side development of web applications. They focus on creating the logic, database interactions, server configuration, and integration with frontend components, ensuring high performance and responsiveness to requests from the front-end
        </p>
      </div>
      <div className='bg-secondary lg:w-2/4 rounded-2xl p-10 flex flex-col justify-between gap-10 lg:gap-0'>
        <div className='lg:text-xl text-lg font-gilroy-italic flex justify-between'>
          <div>
            Have Some
            <p>
              Questions?
            </p>
          </div>
          <MdArrowOutward size={30} />
        </div>
        <div>
          <p className='text-gilroy text-5xl mb-5 font-gilroy-semibold'>Contact Me</p>
        </div>
      </div>
    </div>
  )
}

function Aside() {
  return (
    <div className=' flex-1 gap-5 flex flex-col'>
      <div className='bg-primary rounded-2xl p-5 h-5/6'>
        <ul className='p-5 divide-y-2 '>
          <li className='flex justify-between items-center m-5'>
            <p className='text-3xl font-gilroy-semibold'>
              Project
            </p>
            <FaArrowRight size={20} />
          </li>
          <hr />
        </ul>
      </div>
      <div className='bg-primary rounded-2xl p-5 lg:h-1/6'>
        <ul className='flex font-gilroy-regular justify-around items-center h-full text-xl'>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  )
}