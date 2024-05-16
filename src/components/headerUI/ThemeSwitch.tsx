'use client'
import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const changeTheme = () => {
    if(theme === 'light') return setTheme(prev => 'dark')
    setTheme(prev => 'light')
  }

  useEffect(() => {
    if (theme) {
      setIsThemeLoaded(true)
    }
  }, [theme])

  if (!isThemeLoaded) {
    return <div></div>
  }

  return (  
    <div 
      onClick={changeTheme}
      className="bg-lightBg dark:bg-darkBg w-16 h-8 rounded-full relative"
    >
      <div 
        className={`
          ${theme === 'light' ? 'left-0.5 right-auto' : 'right-0.5 left-auto'}
          size-7 rounded-full flex items-center justify-center transition-all
          bg-foregroundLight dark:bg-foregroundDark absolute top-0.5
        `}
      >
        {theme === 'light' ? <SunIcon size="24"/> : <MoonIcon size="24"/>}
      </div>
    </div>
  );
}
 
export default ThemeSwitch;