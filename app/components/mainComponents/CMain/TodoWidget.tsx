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
import { AppDispatch, store, useAppSelector } from "@/app/redux/store";
import { changeToDoModal } from "@/app/redux/features/ToDoModal";
import { useEffect, useMemo, useState } from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const TodoWidget = () => {
  // const isLoaded = useAppSelector((store) => store.Loading.value)

  const [isLoaded, setIsLoaded] = useState(true)
  const todoItems = useAppSelector(store => store.TodoTasks.store)

  const dispatch = useDispatch<AppDispatch>()
  const openToDoModal = () => {
    dispatch(changeToDoModal(true))
  }

  const RenderToDo = useMemo(() => {
    const sortedData: any = {}

    for(const item of todoItems){
      if(sortedData[item.todoCategory] === undefined){
        sortedData[item.todoCategory] = []
      }
      sortedData[item.todoCategory].push(item)
    }
    console.log(sortedData)


    const result = []

    for(const item in sortedData){
      result.push(
        <CTodo title={item} collectionOfTodo={sortedData[item].reverse()}/>
      )
    }

    if(result.length === 0){
      return (
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center justify-center text-center text-blue-200 text-xl">
            Haven`t Todo <FaRegFaceSmileBeam/>
          </div>
        </div>
      )
    }
    return result

  }, [todoItems])

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
          {RenderToDo}
        </FlexGrid>
      </CAssess>
    </Widget>
  )
}
 
export default TodoWidget;