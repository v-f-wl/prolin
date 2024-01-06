'use client'
import userDataProps from "@/app/types/userType"
import { useEffect, useState } from "react"
import { BiHide, BiShow } from 'react-icons/bi'
interface FormInputProps{
  formType: 'text' | 'password',
  error?: boolean,
  changeValue: (label: keyof userDataProps, value: string) => void,
  inputLabel: keyof userDataProps,
  isLoading?: boolean
}
const FormInput:React.FC<FormInputProps> = ({
  formType, 
  error,
  changeValue,
  inputLabel,
  isLoading,
}) => {
  const [hiddenPassword, setHiddenPassword] = useState(false)

  const toggleShowPassword = () => {
    setHiddenPassword(prev => !prev)
  }

  if(formType === 'text'){
    return ( 
      <input 
        onChange={(e) => changeValue(inputLabel, e.target.value)}
        type="text" 
        className={`
          ${error ? "border-red-400 border-2" : 'border-neutral-400'}
          ${isLoading? "text-neutral-300" : "text-black"} 
          input-style 
          socialBtn 
          exo
        `}
        disabled={isLoading}
      />
    )
  }

  return (
    <div className="relative">
      <input 
        onChange={(e) => changeValue(inputLabel, e.target.value)}
        type={hiddenPassword ? 'text' : 'password'} 
        className={`
          ${error ? "border-red-400 border-2" : 'border-neutral-400'} 
          ${isLoading? "text-neutral-300" : "text-black"} 
          w-full 
          input-style 
          socialBtn 
          exo pr-10
        `}
        disabled={isLoading}
      />
      <div 
        onClick={toggleShowPassword}
        className=" 
          cursor-pointer
          p-1 
          absolute 
          top-1/2 
          -translate-y-1/2 
          right-2 
          text-2xl
        "
      >
        {hiddenPassword ? 
          (
            <BiShow/>
          )
          :
          (
            <BiHide />
          )
        }
      </div>
    </div>
  )
}
 
export default FormInput;