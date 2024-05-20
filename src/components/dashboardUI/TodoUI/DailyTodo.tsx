'use client'
import SubTitle from "@/components/SubTitle";
import { SubList } from "@/types/todoType";
import { useMemo, useState } from "react";
import SubTodo from "./SubTodo";

const DailyTodo = () => {
  const [todoList, setTodoList] = useState<SubList[]>([
    {
      completed: false,
      id: '12313',
      value: 'vlksdnfkv'
    },
    {
      completed: false,
      id: '234',
      value: ';kvsdjnfkv;'
    },{
      completed: true,
      id: '12313',
      value: 'vlksdnfkv'
    },
    {
      completed: false,
      id: '234',
      value: ';kvsdjnfkv;'
    },
  ])

  const countOfCompleatedTodo = useMemo(() => {
    let result = 0
    for(const item of todoList){
      if(item.completed){
        result++
      }
    }
    return result
  }, [todoList])
  return ( 
    <div className="mt-4 border h-full p-4 rounded-xl">
      <SubTitle text={`Compleated ${countOfCompleatedTodo}/${todoList.length}`}/>
      <div className="mt-5 flex flex-col gap-4">
        {todoList.map((item) => (
          <SubTodo value={item.value} id={item.id} completed={item.completed} key={item.id}/>
        ))}
      </div>
    </div>
  );
}
 
export default DailyTodo;