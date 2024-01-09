'use client'
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEdit, AiOutlineInbox  } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setTasks } from "@/app/redux/features/ToDoHandler";

interface TodDoDate{
  [key: string]: string
}
interface ToDoCardProps{
  dateFor: TodDoDate,
  title: string,
  completed: boolean,
  priority?: string,
  id: string
}
const ToDoCard:React.FC<ToDoCardProps> = ({
  dateFor,
  title,
  completed,
  priority,
  id
}) => {
  const userId = Cookies.get('user_id__value')
  const [deleting, setDeleting] = useState(false)
  const dispatch = useDispatch()
  const handleDeleteTodo = () => {
    setDeleting(prev => true)
    axios.post('/api/deleteTodo',{
      userId: userId, 
      todoId: id
    })
    .then(res => {
      dispatch(setTasks(res.data.data))
      setDeleting(false)
    })
    .catch(error => {
      setDeleting(false)
      console.log(error)
    })
  }
  return (  
    <div 
      className={`
        ${deleting ? 'border-gray-700/70' : 'border-neutral-500 dark:border-neutral-400'} 
        ${completed ? '' : 'border'} 
        relative
        rounded-lg p-4 flex flex-col gap-4 text-xl
      `}
    >
      <div 
        className={`${deleting ? 'flex' : 'hidden'} absolute inset-0 z-10 bg-gray-700/70 items-center justify-center`}
      >
        Loading...
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-300">
          <BsCalendar4Event/>
          <div className="">{dateFor.date}</div>
        </div>
        <div className="flex gap-4">
          <div 
            className={`
              flex 
              items-center 
              gap-2 cursor-pointer
              text-green-300 
              ${completed ? 'opacity-100' : 'opacity-60 hover:opacity-100 transition-all'}
            `}
          >
            <AiOutlineCheckCircle/>
            Check
          </div>
          <div className={`${completed ? 'hidden' : 'flex'} cursor-pointer items-center gap-2 text-indigo-300 opacity-60 hover:opacity-100 transition-all`}>
            <AiOutlineEdit/>
            Edit
          </div>
          <div 
            onClick={handleDeleteTodo}
            className="flex items-center cursor-pointer gap-2 text-red-300 opacity-60 hover:opacity-100 transition-all">
            <AiOutlineCloseCircle/>
            Delete
          </div>
        </div>
      </div>
      <div className={`${completed && 'line-through text-neutral-400'}`}>
        {title}
      </div>
      <div className={`${completed && 'opacity-30'} flex items-center gap-2`}>
        <div className={`
            ${priority === 'Not Important' && "bg-[#AEABAB]"}
            ${priority === 'Low Priority' && "bg-[#0891B2]"}
            ${priority === 'Medium Priority' && "bg-[#15803D]"}
            ${priority === 'High Priority' && "bg-[#7C3AED]"}
            ${priority === 'Very Important' && "bg-[#9D174D]"}
            w-4 h-4 rounded-sm "
          `}
        >
        </div>
        <div 
          className={`
            ${priority === 'Not Important' && "text-[#AEABAB]"}
            ${priority === 'Low Priority' && "text-[#0891B2]"}
            ${priority === 'Medium Priority' && "text-[#15803D]"}
            ${priority === 'High Priority' && "text-[#7C3AED]"}
            ${priority === 'Very Important' && "text-[#9D174D]"}
            text-base
          `}
        >
          {priority}
        </div>
      </div>
    </div>
  );
}
 
export default ToDoCard;