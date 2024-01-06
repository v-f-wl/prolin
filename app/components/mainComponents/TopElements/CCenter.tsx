'use client'

import { useAppSelector } from '@/app/redux/store';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {IoMdNotificationsOutline} from 'react-icons/io'

const CenterComponents = () => {
  const {setTheme, theme} = useTheme()
  const isLoaded = useAppSelector((store) => store.Loading.value)

  if(!isLoaded){
    return (
      <div className="h-14 w-full bg-neutral-200 dark:bg-neutral-500 animate-pulse rounded-xl"></div>
    )
  }
  return ( 
    <Link href='/' className="bg-white dark:bg-neutral-700 dark:text-white rounded-xl py-4 px-6 flex items-center justify-between text-neutral-600">
      {theme === 'light' ? 
        <img src="./darkLogo.svg" alt="logo" />
        :
        <img src="./lightLogo.svg" alt="logo" />
      }
        <IoMdNotificationsOutline size={28}/>
    </Link>
  );
}
 
export default CenterComponents;