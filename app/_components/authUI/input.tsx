'use client'

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AuthInput = ({
  label
}:{
  label: string
}) => {
  const [idInput, setIdInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIdInput(uuidv4())
  }, [])

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(inputRef.current?.value !== '');
  }
  
  return ( 
    <div className="relative flex flex-col">
      <input 
        ref={inputRef}
        id={idInput} 
        type="text" 
        className="
          peer 
          w-[320px] h-[48px]
          px-3
          border-2 border-cyan-600 rounded-xl 
          outline-none 
          font-light
        "
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label 
        htmlFor={idInput} 
        className={`
          absolute left-4 
          text-cyan-600
          px-1 
          transition-all duration-300
          ${isFocused || (inputRef.current && inputRef.current.value) ? '-top-[11px] bg-white' : 'top-3'}
        `}
      >
        {label}
      </label>
    </div>
   );
}
 
export default AuthInput;