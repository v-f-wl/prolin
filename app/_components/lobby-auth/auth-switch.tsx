'use client'
import { useState } from "react";
import JoinScreen from "./join-screen";
import CreateLobby from "./create-lobby-screen";
import { useParams } from "next/navigation";

// переименовать состояние click
const AuthSwitch = () => {
  const [changeTab, setChangeTab] = useState(true)
  const params = useParams()
  const { lobbyId } = params
  const handleChangeTab = () => {
    if(lobbyId !== 'newLobby') return
    setChangeTab(prev =>!prev) 
  }
  return ( 
    <div className="max-w-[1024px] w-full h-[640px] rounded-xl flex overflow-hidden relative">
      <JoinScreen isActive={changeTab} changeScreen={handleChangeTab}/>
      <CreateLobby isActive={changeTab} changeScreen={handleChangeTab}/>

      {/* background switch */}
      <div 
        className={`
          ${changeTab ? 'translate-x-full' : 'translate-x-0 '} 
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
