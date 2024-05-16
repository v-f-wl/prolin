import CDayStatus from "@/containers/CDayStatus";
import PageTitle from "../PageTitle";

const TodoList = () => {
  return ( 
    <CDayStatus>
      <div className="">
        <PageTitle title="ToDo List"/>
        <div className="">
          <div className="">Calegory</div>
          <div className="border">card</div>
        </div>
      </div>
      <div className="">
        <PageTitle title="Daily tasks"/>
        <div className="border h-full"></div>
      </div>
    </CDayStatus>
  );
}
 
export default TodoList;