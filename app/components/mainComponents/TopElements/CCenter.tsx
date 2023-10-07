'use client'

import { useTheme } from 'next-themes';
import {IoMdNotificationsOutline} from 'react-icons/io'
const CenterComponents = () => {
  const {setTheme, theme} = useTheme()
  return ( 
    <div className="bg-white dark:bg-neutral-700 dark:text-white rounded-xl py-4 px-6 flex items-center justify-between text-neutral-600">
      {theme === 'light' ? 
        <img src="./darkLogo.svg" alt="logo" />
        :
        <img src="./lightLogo.svg" alt="logo" />
      }
      <IoMdNotificationsOutline size={28}/>
    </div>
  );
}
 
export default CenterComponents;