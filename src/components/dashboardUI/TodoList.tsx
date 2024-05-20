'use client'
import CDayStatus from "@/containers/CDayStatus";
import PageTitle from "../PageTitle";
import TodoWrapper from "./TodoUI/TodoWrapper";
import Button from "../Button";
import FlexBetween from "@/containers/FlexBetween";
import DailyTodo from "./TodoUI/DailyTodo";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/todoModalSlice";


const TodoList = () => {

  const dispatch = useDispatch()

  const openCreateTodo = () => {
    dispatch(openModal())
  }
  return ( 
    <CDayStatus className="items-start">
      <div>
        <FlexBetween>
          <PageTitle title="ToDo List"/>
          <div className="flex items-center gap-4">
            <div className="">Filter</div>
            <Button value="Add Todo" onClick={openCreateTodo} style="green"/>
          </div>
        </FlexBetween>
        <TodoWrapper/>
      </div>
      <div>
        <FlexBetween>
          <PageTitle title="Daily tasks"/>
            <Button value="Edit" onClick={() => {}} style="green"/>
        </FlexBetween>
        <DailyTodo/>
      </div>
    </CDayStatus>
  );
}
 
export default TodoList;