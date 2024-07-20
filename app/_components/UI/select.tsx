'use client'

import IArrow from "@/_assets/icons/IArrow"
import { useState } from "react"

interface selectOptionsType{
  label: string,
  value: string
}


const Select = ({
  options
} : {
  options: selectOptionsType[]
}) => {
  const [selectedvalue, setSelectedValue] = useState('')
  const [isActiveOptions, setIsActiveOptions] = useState(false)

  const handleOpenOptions = () => {
    setIsActiveOptions(prev => !prev)
  }
  return ( 
    <div className="flex flex-col gap-1 max-w-[70%] w-full">
      <div 
        onClick={handleOpenOptions}
        className=" border py-2 px-4 rounded-xl relative"
      >
        Select
        <div 
          className={`
            ${isActiveOptions ? 'rotate-0' : 'rotate-180'} transition-all
            absolute top-[50%] right-2 -translate-y-1/2
          `}
        >
          <IArrow size="24"/>
        </div>
      </div> 
      <div 
        className={`
          ${isActiveOptions ? 'max-h-[1000px] border py-2' : 'max-h-0 overflow-hidden'}
          transition-all duration-300 rounded-xl will-change-transform px-4
          
        `}
      >
        options
        <div className="h-[80px]"></div>
      </div>
    </div>
  );
}
 
export default Select;