import { SubList } from "@/types/todoType";
import { useState } from "react";

const SubTodo = (props: SubList) => {
  const [completed, setCompleted] = useState(props.completed)

  const changeComplete = () => {
    setCompleted(prev => !prev)
  }
  return ( 
    <div 
      onClick={changeComplete}
      className="
        flex items-center gap-2 
        cursor-pointer 
        transition-colors 
        hover:text-lightGreen dark:hover:text-darkGreen"
      >
      <div 
        className={`
          w-4 h-4 transition-all
          ${completed ? 'bg-black dark:bg-white rounded-full' : 'border rounded-sm border-opacity-70'} 
        `}
      ></div>
      <div className="italic text-xl">{props.value}</div>
    </div>
  );
}
 
export default SubTodo;