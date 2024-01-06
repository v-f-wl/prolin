'use client'
import { useState } from "react";
import Widget from "../UI/Widget";
import { WiDayCloudy } from 'react-icons/wi'
import { useAppSelector } from "@/app/redux/store";

const WeatherWidget = () => {
  const isLoaded = useAppSelector((store) => store.Loading.value)

  if(!isLoaded){
    return (
      <div className="w-full h-[240px] rounded-xl bg-neutral-200 dark:bg-neutral-500 animate-pulse"></div>
    )
  }
  return ( 
    <Widget>
      <div className="py-2 flex flex-col items-center justify-center gap-4">
        <WiDayCloudy className="text-[100px]"/>
        <div className=''>Clear</div>
        <div className='text-5xl font-bold font-["Open_Sans"]'>+24°</div>
      </div>
    </Widget>
   );
}
 
export default WeatherWidget;