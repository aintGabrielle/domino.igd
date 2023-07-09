import React from 'react'
import Typed from 'react-typed'
const WelcomePage = () => {
  return (
    <div className='w-full min-h-screen'>
        <div className='w-full min-h-screen max-w-5xl mx-auto '>
            <div className='w-fit bg-orange-300 text-white z-10 shadow-lg shadow-gray-700/50 rounded-lg h-fit py-16 px-8 md:py-32 top-52 relative md:px-24 mx-auto flex flex-col items-center justify-center gap-4'>
                <h1 className='text-3xl md:text-5xl'>Welcome to my Portfolio!</h1>
                <p className='text-xl md:text-2xl'><Typed strings={['NextJS', 'ReactJS', 'HTML', 'CSS',' TAILWIND', 'PYTHON', 'C#', 'SQL']} typeSpeed={50} backSpeed={100} loop/></p>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage