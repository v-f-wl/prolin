import CDayStatus from "@/containers/CDayStatus";
import PageTitle from "../PageTitle";
import { useState } from "react";
import TodoWrapper from "./TodoUI/TodoWrapper";
import Button from "../Button";
import ArrowDown from "@/assets/icons/ArrowDown";
import FlexBetween from "@/containers/FlexBetween";

const TodoList = () => {
  const [loading, setLoading] = useState(true)

  if(!loading){
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }
  return ( 
    <CDayStatus>
      <div>
        <FlexBetween>
          <PageTitle title="ToDo List"/>
          <Button value="Add Todo" onClick={() => {}} style="green"/>
        </FlexBetween>
        <TodoWrapper/>
      </div>
      <div>
        <PageTitle title="Daily tasks"/>
        <div className="border h-full p-4 rounded-xl">Dayly todo</div>
      </div>
    </CDayStatus>
  );
}
 
export default TodoList;