'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  // State to track the vertical scroll position
  const [scrollY, setScrollY] = useState(0)

  const router = useRouter()

  // Handler to update the scroll position state
  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  // Effect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return ( 
    <header 
      className={`
        ${scrollY > 55 ? 'bg-gray-100 z-10 px-4 py-1 rounded-b-lg header-animation top-0' : 'top-7'}
        fixed mx-auto container flex justify-between items-center
      `}
    >
      <div className="text-3xl font-bold">Prolin</div>
      <div className={`${scrollY > 55 ? '' : 'bg-gray-100'}  py-3 px-6 rounded-lg flex gap-11 items-center`}>
        <div className=''>How It Works</div>
        <div className=''>Why Poker Scrum?</div>
        <div className="">Testimonials</div>
        <div className="">FAQ</div>
        <div className="">Resourses</div>
      </div>
      <div 
          onClick={() => router.push('/lobby-access/newLobby')}
          className={`
            ${scrollY > 55 ? 'bg-indigo-400 text-white' : 'border border-indigo-400'}
            md:px-8 py-0.5 text-lg  rounded-xl cursor-pointer hover:opacity-80 transition-opacity
          `}
      >
        Get Started
      </div>
    </header>
  );
}
 
export default Header;