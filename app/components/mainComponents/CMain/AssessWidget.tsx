'use client'
import FlexBetween from "../../UI/FlexBetween";
import InfoBtn from "../../UI/InfoBtn";
import Widget from "../UI/Widget";
import CAssess from "./assess/CAssess";

import { LuPencilLine } from 'react-icons/lu'
import WidgetTitle from "../../UI/WidgetTitle";
import SlideToggle from "./assess/SlideToggle";
import { useMemo, useState } from "react";
import WeakSlide from "./assess/WeakSlide";
import YearSlide from "./assess/YearSlide";


const AssessWidget = () => {
  const [widgetSlide, setWidgetSlide] = useState('year')

  const renderComponent = useMemo(() => {
    if(widgetSlide === 'mounth') return <div>Mounth</div>
    if(widgetSlide === 'year') return <YearSlide/>
    return <WeakSlide/>
  } ,[widgetSlide])
  

  const changeWidgetSLide = (label: string) => {
    setWidgetSlide(prev => label)
  }

  return ( 
    <Widget>
      <CAssess>
        <FlexBetween>
          <WidgetTitle title="Assess the day"/>
          <FlexBetween className='gap-8'>
            <LuPencilLine className='text-3xl cursor-pointer'/>
            <InfoBtn title='Add a rating' style="green" icon={true}/>
          </FlexBetween>
        </FlexBetween>
        {renderComponent}
        <SlideToggle changeValue={changeWidgetSLide}/>
      </CAssess>
    </Widget>
   );
}
 
export default AssessWidget;