import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const [value, setValue] = useState(true)
    const handleValue = () => {
        setValue(!value)
    }
  return (
    <nav className='w-full h-24 flex items-center justify-between px-8 '>
        <Link href={'/'}><Image src={'/domino.png'} width={200} height={200}/></Link>
        <ul className='hidden space-x-4 text-xl font-mono md:flex'>
            <li className='text-gray-700'><Link href={'/'}>HOME</Link></li>
            <li className='hover:scale-105 transition-all ease-in focus-within:text-red-800'><Link href={'/about'}>ABOUT</Link></li>
            <li className='hover:scale-105 transition-all ease-in focus-within:text-red-800'><Link href={'/education'}>EDUCATION</Link></li>
            <li className='hover:scale-105 transition-all ease-in focus-within:text-red-800'><Link href={'/projects'}>PROJECTS</Link></li>
            <li className='hover:scale-105 transition-all ease-in focus-within:text-red-800'><Link href={'/contact'}>CONTACT</Link></li>
        </ul>
        <div onClick={handleValue} className='block md:hidden'>
            <AiOutlineMenu size={30}/>
        </div>
        <div className={!value ? 'px-5 z-20 w-full min-h-screen absolute top-0 left-0 bg-black text-white flex items-center justify-between transition-all duration-300 ease-in md:hidden' : 'z-20 w-full min-h-screen absolute top-0 left-[-100%] bg-white text-black flex items-center justify-between duration-200 transition-all ease-in md:hidden'}>
            <ul className='gap-6 min-h-screen justify-center flex flex-col text-xl font-mono'>
                <li className='text-gray-500' onClick={handleValue}><Link href={'/'}>HOME</Link></li>
                <li className='transition-all ease-in focus-within:text-red-800' onClick={handleValue}><Link href={'/about'}>ABOUT</Link></li>
                <li className='transition-all ease-in focus-within:text-red-800' onClick={handleValue}><Link href={'/education'}>EDUCATION</Link></li>
                <li className='transition-all ease-in focus-within:text-red-800' onClick={handleValue}><Link href={'/projects'}>PROJECTS</Link></li>
                <li className='transition-all ease-in focus-within:text-red-800' onClick={handleValue}><Link href={'/contact'}>CONTACT</Link></li>
            </ul>
            <div onClick={handleValue}>
                <AiOutlineClose size={30}/>
            </div>
        </div>
    </nav>
  )
}

export default Nav