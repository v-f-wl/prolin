'use client'
import { useState } from "react"
import { BiHide, BiShow } from 'react-icons/bi'
interface FormInputProps{
  formType: 'text' | 'password',
  error?: boolean
}
const FormInput:React.FC<FormInputProps> = ({formType, error}) => {
  const [hiddenPassword, setHiddenPassword] = useState(false)

  const toggleShowPassword = () => {
    setHiddenPassword(prev => !prev)
  }
  if(formType === 'text'){
    return ( 
      <input type="text" className="input-style socialBtn exo"/>
    )
  }

  return (
    <div className="relative">
      <input type={hiddenPassword ? 'text' : 'password'} className="w-full input-style socialBtn exo"/>
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