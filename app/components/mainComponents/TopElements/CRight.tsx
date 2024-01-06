'use client'
import { IoSettingsOutline } from 'react-icons/io5'
import Switch from './Switch';
import { useState } from 'react';
import FlexBetween from '../../UI/FlexBetween';
import { useAppSelector } from '@/app/redux/store';
const CRight = () => {

  const isLoaded = useAppSelector((store) => store.Loading.value)

if(!isLoaded){
  return (
    <FlexBetween>
      <div className="w-14 h-14 rounded-full bg-neutral-200 dark:bg-neutral-500 animate-pulse"></div>
      <div className="w-24 h-14 rounded-full bg-neutral-200 dark:bg-neutral-500 animate-pulse"></div>
    </FlexBetween>
  )
}
  return ( 
    <div className="flex items-center justify-between text-neutral-600 dark:text-white">
      <IoSettingsOutline size={28}/>
      <Switch/>
    </div>
   );
}
 
export default CRight;