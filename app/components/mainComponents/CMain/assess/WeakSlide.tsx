'use client'
import FlexBetween from "@/app/components/UI/FlexBetween";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useMemo, useState } from "react";
import WInfo from "./WInfo";

type obgInt = {
  [key: string]: number
}
interface grathDataInt{
  [key: string]: obgInt
}
const WeakSlide = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const daysOfWeek: string[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]


  const ratingRender = useMemo(() => {
    let result = []
    let currentNumb = 80
    while(currentNumb >= 0 ){
      result.push(<span key={`${currentNumb * 1.1}__numb`}>{currentNumb}</span>)
      currentNumb = currentNumb - 20
    }
    return result
  }, [])

  const grathData: grathDataInt = {
    'mon': {
      'one': 45,
      'two': 53,
      'three': 56
    },
    'tue':{
      'one': 75,
      'two': 53,
      'three': 36
    },
    'wed':{
      'one': 15,
      'two': 46,
      'three': 38
    },
    'sun': {
      'one': 15,
      'two': 76,
      'three': 38
    }
  }

  const renderWeekData = useMemo(() => {
    const result = []

    for(let i of daysOfWeek){
      if(grathData[i]){
        console.log(grathData[i].one)
      }
      result.push(
        <div className="justify-self-center">
          {grathData[i] ? (
            <div className="h-full flex items-end gap-2">
              <div style={{height: grathData[i].one + '%'}} className={`rounded-[4px] bg-red-600 dark:bg-red-400 w-[11px]`}></div>
              <div style={{height: grathData[i].two + '%'}} className={`rounded-[4px] bg-lime-500 dark:bg-lime-300 w-[11px]`}></div>
              <div style={{height: grathData[i].three + '%'}} className={`rounded-[4px] bg-indigo-500 dark:bg-indigo-300 w-[11px]`}></div>
            </div>
          ) : (
            <div className="h-full flex items-end gap-1">
              <div className={`w-[11px]`}></div>
              <div className={`w-[11px]`}></div>
              <div className={`w-[11px]`}></div>
            </div>
          )}
        </div>
      )
    }
    return result
  },[])
  return ( 
    <div className="">
      {/* Описание */}
      <WInfo/>

      <div className="mt-6 h-[190px] flex items-center gap-4">
        <div className="flex flex-col gap-2">
          {ratingRender}
        </div>


        <div className="relative w-full h-full">
          {/* Линии */}
          <div className="absolute w-full h-full py-[21px] flex flex-col justify-between">
              {Array.from({length: 6}).map((item, index) => (
                <div key={`${index}__line`} className="border border-gray-200/80 dark:border-gray-200/30"></div>
              ))}
          </div>
                
          <div className="absolute bottom-0 w-full h-full grid grid-cols-7 justify-between px-2 pb-[21px]">
            {renderWeekData}
          </div>

          {/* Дни недели */}
          <div className="absolute -bottom-4 w-full grid grid-cols-7 justify-between px-2">
            {daysOfWeek.map((item, index) => (
              <div 
                key={`${index * 1.3}__sdvd`}
                className="capitalize text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default WeakSlide;