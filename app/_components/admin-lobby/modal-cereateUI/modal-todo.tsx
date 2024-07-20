import Input from "../../UI/input";
import SubTitle from "../../UI/subtitle";

const ModalTodo = () => {
  return ( 
    <div className="flex flex-col gap-4">
          <SubTitle text="ToDo" />
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col gap-2 overflow-y-scroll flex-1">
              <div className="h-full w-full flex flex-col items-center justify-center">
                No todo yet
              </div>
              {/* <div className="pl-1 pb-2 border-b border-indigo-300">
                list of new todo
              </div> */}
            </div>
            <div className="flex items-center gap-4">
              <Input placeholderValue="New todo"/>
              <div className="">Add</div>
            </div>
          </div>
        </div>
  );
}
 
export default ModalTodo;