import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import user from '../assets/images/user.png'
import { headerDataLinks } from '../data/headerDataLinks'
import { Link } from 'react-router-dom'
import { HiDotsVertical } from 'react-icons/hi'
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

  return (
    <header className='relative p-2 flex bg-slate-900 z-10 items-center'>
        <div className='container flex gap-8 items-center '>
        <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover'/>
        <nav className='hidden md:flex gap-4 '>
            {
                headerDataLinks.map(el => {
                    return <Link key={el.id} to={el.link} className='text-white px-4 flex gap-3 items-center font-semibold text-[18px] cursor-pointer hover:underline underline-offset-8' >
                       {el.icon} 
                     <span> {el.title}</span></Link>
                })
            }
             
        </nav>
        <nav className='flex md:hidden gap-4 items-center'>
            {
                headerDataLinks.slice(0, 3).map(el => {
                    return <Link key={el.id} to={el.link} className='text-white px-4 flex gap-3 items-center font-semibold text-[18px] cursor-pointer hover:underline underline-offset-8' >
                       {el.icon} 
                     <span className='hidden md:flex'> {el.title}</span></Link>
                })
            }
            <div className='relative'>
             <HiDotsVertical  className='flex text-white cursor-pointer' onClick={toggleMenu} />
             {menuOpen &&(

            <nav className=' absolute block md:hidden gap-4 border border-gray-700 mt-3 p-2 py-4 bg-[#121212] '>
            {
                headerDataLinks.slice(3).map(el => {
                    return <Link key={el.id} to={el.link} className='text-white px-4 flex gap-3 items-center font-semibold text-[18px] cursor-pointer hover:underline underline-offset-8 m-2' >
                       {el.icon} 
                     <span> {el.title}</span></Link>
                })
            }
             
        </nav>
             )}
        </div>
        </nav>
        </div>
        <img src={user} className='w-12 h-12 rounded-full mr-3' />
    </header>
  )
}

