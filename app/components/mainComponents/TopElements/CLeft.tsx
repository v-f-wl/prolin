'use c'
import { useState } from "react";
import FlexBetween from "../../UI/FlexBetween";
import { useAppSelector } from "@/app/redux/store";

const LeftContainer = () => {
  const isLoaded = useAppSelector((store) => store.Loading.value)
  if(!isLoaded){
    return (
      <FlexBetween className="gap-10">
        <div className="w-[130px] h-14 bg-neutral-200 dark:bg-neutral-500 animate-pulse rounded-lg"></div>
        <div className="w-[90px] h-14 bg-neutral-200 dark:bg-neutral-500 animate-pulse rounded-lg"></div>
      </FlexBetween>
    )
  }
  return ( 
    <div className="form-light flex item-center justify-between">
      <div className="">Belgrad, Serbia</div>
      <div className="font-['Open_Sans']">
        17:42
      </div>
    </div>
   );
}
 
export default LeftContainer;