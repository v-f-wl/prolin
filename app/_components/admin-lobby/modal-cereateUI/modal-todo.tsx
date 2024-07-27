'use client'
import { useState } from "react";
import Input from "../../UI/input";
import SubTitle from "../../UI/subtitle";
import TodoItem from "./todo-item";

interface TodoListType{
  title: string,
  id: string
}
const ModalTodo = () => {
  const [todosList, setTodosList] = useState<TodoListType []>([
    {title: 'new ToDo', id: 'fbm3ok4m'},
    {title: 'new ToDo', id: 'fbm3ok4m'},
    {title: 'new ToDo', id: 'fbm3ok4m'},
  ])

  return ( 
    <div className="flex flex-col gap-4">
          <SubTitle text="ToDo" />
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col gap-2 overflow-y-scroll flex-1">
              {
                todosList.length === 0 
                ? 
                (
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    No todo yet
                  </div>
                ) 
                : 
                (
                  <div className="max-h-[200px] overflow-y-scroll h-full w-full flex flex-col gap-2">
                    {todosList.map(item => (
                      <TodoItem title={item.title} id={item.id}/>
                    ))}
                  </div>
                )
              }
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