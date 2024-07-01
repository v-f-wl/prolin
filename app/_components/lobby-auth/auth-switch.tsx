'use client'
import { useState } from "react";
import JoinScreen from "./join-screen";
import CreateLobby from "./create-lobby-screen";

// переименовать состояние click
const AuthSwitch = () => {
  const [click, setClick] = useState(true)

  const handleChange = () => {
    setClick(prev =>!prev) 
  }
  return ( 
    <div className="max-w-[1024px] w-full h-[640px] rounded-xl flex overflow-hidden relative">
      <JoinScreen isActive={click} changeScreen={handleChange}/>
      <CreateLobby isActive={click} changeScreen={handleChange}/>

      {/* background switch */}
      <div 
        className={`
          ${click ? 'translate-x-full' : 'translate-x-0 '} 
          absolute top-0 z-10
          w-1/2 h-full 
          bg-black/20
          transition-all duration-500 will-change-transform
        `}
      >
      </div>
    </div>
  );
}
 
export default AuthSwitch;
