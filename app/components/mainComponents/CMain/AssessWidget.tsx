'use client'
import FlexBetween from "../../UI/FlexBetween";
import InfoBtn from "../../UI/InfoBtn";
import Widget from "../UI/Widget";
import CAssess from "./assess/CAssess";

import WidgetTitle from "../../UI/WidgetTitle";
import SlideToggle from "./assess/SlideToggle";
import { useMemo, useState } from "react";
import WeakSlide from "./assess/WeakSlide";
import YearSlide from "./assess/YearSlide";
import { useAppSelector } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { changeRatingModal } from "@/app/redux/features/RatingModal";


const AssessWidget = () => {
  const [widgetSlide, setWidgetSlide] = useState('week')


  const isLoaded = useAppSelector((store) => store.Loading.value)
  const modalIsOpen = useAppSelector((store) => store.RatingModal.value)
  const dispatch = useDispatch()
  const renderComponent = useMemo(() => {
    if(widgetSlide === 'mounth') return <div>Mounth</div>
    if(widgetSlide === 'year') return <YearSlide/>
    return <WeakSlide/>
  } ,[widgetSlide])
  

  const changeWidgetSLide = (label: string) => {
    setWidgetSlide(prev => label)
  }

  const openModalWindow = () => {
    dispatch(changeRatingModal(true))
  }
  if(!isLoaded){
    return (
      <div className="w-full h-[310px] bg-neutral-200 dark:bg-neutral-500 animate-pulse rounded-xl"></div>
    )
  }

  return ( 
    <Widget>
      <CAssess>
        <FlexBetween>
          <WidgetTitle title="Assess the day"/>
          <FlexBetween className='gap-8'>
            <InfoBtn ClickBtn={openModalWindow} title='Add a rating' style="green" icon={true}/>
          </FlexBetween>
        </FlexBetween>
        {renderComponent}
        <SlideToggle changeValue={changeWidgetSLide}/>
      </CAssess>
    </Widget>
   );
}
 
export default AssessWidget;