'use client'

import IArrow from "@/_assets/icons/IArrow"
import { useState } from "react"
import SelectItem from "./select-item"

interface selectOptionsType{
  label: string,
  value: string
}


const Select = ({
  options
} : {
  options: selectOptionsType[]
}) => {
  const [selectedvalue, setSelectedValue] = useState('Select an estimation method')
  const [isActiveOptions, setIsActiveOptions] = useState(false)

  const handleOpenOptions = () => {
    setIsActiveOptions(prev => !prev)
  }

  const hangleCnahgeOption = (label: string) => {
    setSelectedValue(prev => label)
    setIsActiveOptions(prev => false)
  }
  return ( 
    <div className="flex flex-col gap-1 max-w-[70%] w-full">
      <div 
        onClick={handleOpenOptions}
        className=" border py-2 px-4 rounded-xl relative"
      >
        {selectedvalue}
        <div 
          className={`
            ${isActiveOptions ? 'rotate-180' : 'rotate-0'} transition-all
            absolute top-[50%] right-2 -translate-y-1/2
          `}
        >
          <IArrow size="24"/>
        </div>
      </div> 
      <div 
        className={`
          ${isActiveOptions ? 'max-h-[330px] border py-2 overflow-y-scroll' : 'max-h-0 overflow-hidden'}
          flex flex-col gap-2
          transition-all duration-300 rounded-xl will-change-transform px-4
          
        `}
      >
        {options.map(item => (
          <SelectItem label={item.label} value={item.value} changeOption={hangleCnahgeOption}/>
        ))}
      </div>
    </div>
  );
}
 
export default Select;