import { useMemo } from "react";
import YInfo from "./YInfo";

type dataVAlue = {
  [key: string]: number
}
interface YearData {
  [key: string] : dataVAlue
}
const YearSlide = () => {
  const mounthLabel: string [] = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  const weekLabel: string [] = ['firstWeek', 'secondWeek', 'thirdWeek', 'fourthWeek']
  const yearData: YearData = {
    jan: {
      firstWeek: 0,
      secondWeek: 30,
      thirdWeek: 49,
      fourthWeek: 66
    },
    feb: {
      firstWeek: 72,
      secondWeek: 84,
      thirdWeek: 95,
      fourthWeek: 46
    },
    may: {
      firstWeek: 61,
      secondWeek: 80,
      thirdWeek: 73,
    },
  }

  const renderItems = useMemo(() => {
    const result = []

    for(const item of mounthLabel){
      const weekResult = []
      
      for(let i of weekLabel){
        if (yearData[item] && yearData[item][i] !== undefined) {
          weekResult.push(
            <div
              className={`
                ${yearData[item][i] >= 0 && yearData[item][i] < 16.67 && 'YColorOne'}
                ${yearData[item][i] >= 16.67 && yearData[item][i] < 33.33 && 'YColorTwo'}
                ${yearData[item][i] >= 33.33 && yearData[item][i] < 50 && 'YColorThree'}
                ${yearData[item][i] >= 50 && yearData[item][i] < 66.67 && 'YColorFour'}
                ${yearData[item][i] >= 66.67 && yearData[item][i] < 80 && 'YColorFive'}
                ${yearData[item][i] >= 80 && yearData[item][i] < 90 && 'YColorSix'}
                ${yearData[item][i] >= 90 && yearData[item][i] < 100 && 'YColorSeven'}
                h-[22px] 
                rounded-md
            `}
              key={`${item}-${i}`}
            ></div>
          );
        } else {
          weekResult.push(
            <div
              className={`border border-neutral-600 dark:border-neutral-500 h-[22px] rounded-md`}
              key={`${item}-${i}`}
            ></div>
          );
        }
      }

      result.push(
        <div className="grid grid-cols-1 gap-3">
          {weekResult}
          <div className="text-center capitalize">{item}</div>
        </div>
      )
    }
    return result
  }, [yearData])

  return ( 
    <div className=" w-full">
      <YInfo/>
      <div className="grid grid-cols-12 gap-3">
        {renderItems}
      </div>
    </div>
  )
}
 
export default YearSlide;