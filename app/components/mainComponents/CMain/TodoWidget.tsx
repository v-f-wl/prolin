import FlexBetween from "../../UI/FlexBetween";
import InfoBtn from "../../UI/InfoBtn";
import WidgetTitle from "../../UI/WidgetTitle";
import FlexGrid from "../UI/FlexGrid";
import Widget from "../UI/Widget";
import CAssess from "./assess/CAssess";
import CTodo from "./assess/CTodo";
import { todoToday, todoBefore, todoAfter } from '@/todoHelper'
import ToDoLine from "./assess/UI/ToDoLine";

const TodoWidget = () => {
  return ( 
    <Widget>
      <CAssess>
        <FlexBetween>
          <WidgetTitle title="ToDo List"/>
          <InfoBtn title="Create ToDo" style="green" icon={true}/>
        </FlexBetween>
        <FlexGrid>
          <CTodo title="Uncompleted task list" collectionOfTodo={todoBefore}/>
          <ToDoLine/>
          <CTodo title="Tasks for today" collectionOfTodo={todoToday}/>
          <ToDoLine/>
          <CTodo title="Upcoming tasks" collectionOfTodo={todoAfter}/>
        </FlexGrid>
      </CAssess>
    </Widget>
  )
}
 
export default TodoWidget;