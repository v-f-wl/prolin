import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineEdit, AiOutlineDelete  } from "react-icons/ai";

interface ToDoCardProps{
  dateFor: string,
  title: string,
  checked: boolean
}
const ToDoCard:React.FC<ToDoCardProps> = ({
  dateFor,
  title,
  checked
}) => {
  return (  
    <div className={`${checked ? '' : 'border'} border-neutral-500 dark:border-neutral-400 rounded-lg p-4 flex flex-col gap-4 text-xl`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-300">
          <BsCalendar4Event/>
          <div className="">{dateFor}</div>
        </div>
        <div className="flex gap-4">
          <div 
            className={`
              flex 
              items-center 
              gap-2 
              text-green-400 
              ${checked ? 'opacity-100' : 'opacity-60 hover:opacity-100 transition-all'}
            `}
          >
            <AiOutlineCheckCircle/>
            Check
          </div>
          <div className={`${checked ? 'hidden' : 'flex'} items-center gap-2 text-orange-400 opacity-60 hover:opacity-100 transition-all`}>
            <AiOutlineEdit/>
            Edit
          </div>
          <div className="flex items-center gap-2 text-red-400 opacity-60 hover:opacity-100 transition-all">
            <AiOutlineDelete/>
            Delete
          </div>
        </div>
      </div>
      <div className={`${checked && 'line-through text-neutral-400'}`}>
        {title}
      </div>
      <div className={`${checked && 'opacity-30'} flex items-center gap-2`}>
        <div className="w-4 h-4 border border-red-300 rounded-sm bg-red-300"></div>
        <div className="text-red-300 text-base">
          Important --
        </div>
      </div>
    </div>
  );
}
 
export default ToDoCard;