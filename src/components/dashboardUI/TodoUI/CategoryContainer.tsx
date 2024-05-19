'use client'

import ArrowDown from "@/assets/icons/ArrowDown"
import { useState } from "react"
import TodoCard from "./TodoCard"
import { ListOfTodo } from "@/types/todoType"

interface CategoryContainerProps{
  category: string,
  listOfTodos: Array<ListOfTodo>,
}
const CategoryContainer:React.FC<CategoryContainerProps> = ({
  category,
  listOfTodos,
}) => {

  const [isOpen, setIsOpen] = useState(true)

  return ( 
    <div className="">
      <div 
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-4 text-black/80 dark:text-white/80 text-lg cursor-pointer"
      >
        <div className="first-letter:capitalize text-xl">{category}</div>
        <div 
          className={`
            ${isOpen ? '' : 'rotate-180'} transition
          `}
        >
          <ArrowDown size="32"/>
        </div>
      </div>

      <div 
        className={`
          flex flex-col gap-3 transition-max-height duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-screen overflow-y-scroll' : 'max-h-0 '}
        `}
      >
        {listOfTodos.map(item => (
          <TodoCard 
            value={item.value}
            date={item.date}
            tag={item.tag}
            list={item.list}
            type={item.type}
            id={item.value}
            link={item.link}
            isOpen={isOpen}
          />
        ))}
      </div>
    </div>
   );
}
 
export default CategoryContainer;
