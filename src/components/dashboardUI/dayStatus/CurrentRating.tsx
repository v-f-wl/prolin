'use client'
import SubTitle from "@/components/SubTitle";
import { useState } from "react";
import RangeItem from "./RangeItem";
import Button from "@/components/Button";

const CurrentRating = () => {
  const [currentState, setCurrentState] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const Loading = () => (
    <div className="flex h-full items-center justify-center">
      <div className="loader"></div>
    </div>
  )

  if(isLoading){
    return <Loading/>
  }
  return ( 
    <div className="border p-7 rounded-xl ">
      <SubTitle text="Assess the day"/>
      <div className="py-3 flex flex-col gap-4">
        <RangeItem title='Percentage of Completed Tasks'/>
        <RangeItem title='Work Efficiency'/>
        <RangeItem title='Learning Achievement'/>
      </div>
      <div className="flex items-center gap-3">
        <Button value="Update" onClick={() => setIsLoading(true)} style="green"/>
        {/* <div className="">
          the future func
        </div> */}
      </div>
    </div>
   );
}
 
export default CurrentRating;