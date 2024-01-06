'use client'
import { useState } from "react";
import InfoBtn from "../../UI/InfoBtn";
import Widget from "../UI/Widget";
import { useAppSelector } from "@/app/redux/store";

const WorkSchedule = () => {
  const isLoaded = useAppSelector((store) => store.Loading.value)

  if(!isLoaded){
    return (
      <div className="w-full h-[120px] bg-neutral-200 dark:bg-neutral-500 rounded-xl animate-pulse"></div>
    )
  }

  return ( 
    <Widget>
      <div 
        className={`
          font-medium text-lg mb-4
        `}
      >
        Before the start of the workday:
      </div>
      <InfoBtn 
        title='7h 23min' 
        style="green"
      />
    </Widget>
  );
}
 
export default WorkSchedule;