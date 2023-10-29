import FlexBetween from "@/app/components/UI/FlexBetween";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  const [isLoaded, setIsLOaded] = useState(true)
  return ( 
    <div className={`${isLoaded ? 'hidden': 'flex'} items-center gap-3`}>
      <AiOutlineLoading3Quarters size={14} className='animate-spin'/>
      <div className="">Loading</div>
    </div>
  )
}
 
export default Loading;