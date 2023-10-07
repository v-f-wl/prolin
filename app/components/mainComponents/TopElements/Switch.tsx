'use client'
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

const Switch = () => {
  const {setTheme, theme} = useTheme()
  const changeTheme = () => {
    if(theme === 'light') return setTheme('dark')
    setTheme('light')
  }
  return ( 
    <div 
      onClick={changeTheme}
      className="switch w-[56px] relative cursor-pointer"
    >
      <div 
        className="
          h-8 w-8
        bg-white  
          rounded-full 
          absolute top-1/2 left-1 -translate-y-1/2 dark:right-1 dark:left-auto
          flex items-center justify-center text-xl
        text-indigo-400
        "
      >
        {theme == 'light' ? 
          <BsSun/>
        :
          <BsMoon/>
        }
      </div>
    </div>
   );
}
 
export default Switch;