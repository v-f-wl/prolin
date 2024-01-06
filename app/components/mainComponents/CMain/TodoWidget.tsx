'use client'
import { useDispatch } from "react-redux";
import FlexBetween from "../../UI/FlexBetween";
import InfoBtn from "../../UI/InfoBtn";
import WidgetTitle from "../../UI/WidgetTitle";
import FlexGrid from "../UI/FlexGrid";
import Widget from "../UI/Widget";
import CAssess from "./assess/CAssess";
import CTodo from "./todo/CTodo";
import { todoToday, todoBefore, todoAfter } from '@/todoHelper'
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { changeToDoModal } from "@/app/redux/features/ToDoModal";
import { useEffect, useState } from "react";

const TodoWidget = () => {
  // const isLoaded = useAppSelector((store) => store.Loading.value)

  const [isLoaded, setIsLoaded] = useState(true)
  const dispatch = useDispatch<AppDispatch>()
  const openToDoModal = () => {
    dispatch(changeToDoModal(true))
  }

  useEffect(() => {
    
  }, [])

  if(!isLoaded){
    return (
      <div className="w-full h-[340px] bg-neutral-200 dark:bg-neutral-500 rounded-xl animate-pulse"></div>
    )
  }
  return ( 
    <Widget>
      <CAssess>
        <FlexBetween>
          <WidgetTitle title="ToDo List"/>
          <InfoBtn ClickBtn={openToDoModal} title="Create ToDo" style="green" icon={true}/>
        </FlexBetween>
        <FlexGrid>
          <CTodo title="Tasks for today" collectionOfTodo={todoToday}/>
        </FlexGrid>
      </CAssess>
    </Widget>
  )
}
 
export default TodoWidget;