import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const about = () => {
  const [sideMenu, setSideMenu] = useState(false)
  const handleSide = () => {
    setSideMenu(!sideMenu)
  }

  const [openTab, setOpenTab] = useState(1)

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row'>
      {sideMenu ? (
        <div className={!sideMenu ? 'w-full max-w-xs min-h-screen absolute top-24 left-[-100%] bg-black text-white flex justify-between items-center transition-all ease-in duration-300' : 'w-full max-w-xs min-h-screen absolute top-24 left-0 bg-black text-white flex justify-between items-center transition-all ease-in duration-300'}>
          <ul className='min-h-screen flex flex-col justify-center gap-8 ml-2 text-xl font-mono'>
            <li onClick={() => {
              setOpenTab(1)
              handleSide()
            }}>HOME</li>
            <li onClick={() => {
              setOpenTab(2)
              handleSide()
            }}>ME</li>
            <li onClick={() => {
              setOpenTab(3)
              handleSide()
            }}>HOBBIES</li>
            <li onClick={() => {
              setOpenTab(4)
              handleSide()
            }}>FOODS</li>
          </ul>
          <AiOutlineClose onClick={handleSide} size={30} />
        </div>
      ) : <div className='absolute min-h-screen hidden md:flex items-center '><AiOutlineMenu size={30} className="ml-4" onClick={handleSide}/></div>}

      <div className='flex-1'>
        {openTab === 1 && 
        <div className='w-full min-h-screen'>
          <div className='w-full max-w-5xl min-h-screen mx-auto '>
            <h1>Home CONTENT GOES HERE</h1>
          </div>
        </div>
        }
        {openTab === 2 && 
        <div className='w-full min-h-screen'>
          <div className='w-full max-w-5xl min-h-screen mx-auto '>
            <h1>Me CONTENT GOES HERE</h1>
          </div>
        </div>
        }
        {openTab === 3 && 
        <div className='w-full min-h-screen'>
          <div className='w-full max-w-5xl min-h-screen mx-auto '>
            <h1>Hobbies CONTENT GOES HERE</h1>
          </div>
        </div>
        }
        {openTab === 4 && 
        <div className='w-full min-h-screen'>
          <div className='w-full max-w-5xl min-h-screen mx-auto '>
            <h1>Skill CONTENT GOES HERE</h1>
          </div>
        </div>
        }
        <div className='md:hidden w-full h-fit items-center fixed bg-black text-gray-500 bottom-0 left-0 py-4 px-2'>
          <ul className='flex justify-around gap-4 ml-2 text-xl font-mono text-center'>
              <li onClick={() => setOpenTab(1)}>HOME</li>
              <li onClick={() => setOpenTab(2)}>ME</li>
              <li onClick={() => setOpenTab(3)}>HOBBIES</li>
              <li onClick={() => setOpenTab(4)}>SKILL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default about