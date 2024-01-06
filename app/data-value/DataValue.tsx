'use client'
import useCountries from "@/hooks/useCountries";
import FlexCenter from "../components/UI/FlexCenter";
import SelectValue from "../components/UI/SelectValue";
import { useState } from "react";
const DataValue = () => {
  const [selectedCountrie, setSelectCountie] = useState('')
  const [cityValue, setCityValue] = useState('')

  const countrines = useCountries().getAll()

  
  return ( 
    <FlexCenter className="h-screen">
      <div className=" w-2/5 bg-gray-200 dark:bg-zinc-600 rounded-lg flex flex-col gap-4 p-14">
        <h2 className="text-4xl font-semibold">Welcome aboard</h2>
        <div className="">
          *Congratulations on joining our community! To make the most of your experience, we'd love to learn a bit more about you. Please take a moment to provide the following details, ensuring a personalized and enjoyable journey within our platform. Thank you for being a part of our community!
        </div>


        <div className="flex gap-8">
          <SelectValue
            dataList={countrines}
          />
          <div className={`${cityValue === '' ? 'opacity-30' : 'opacity-100'}`}>
            <div className="">Write City</div>
            <input type="text" disabled={cityValue === ''} className="relative border py-2 px-3 rounded-xl pr-4 border-neutral-600 bg-inherit outline-none"/>
          </div>
        </div>

        <FlexCenter className="mt-[80px]">
          <div className="border py-2 px-6 rounded-md">Continue</div>
        </FlexCenter>
      </div>
    </FlexCenter>
  );
}
 
export default DataValue;