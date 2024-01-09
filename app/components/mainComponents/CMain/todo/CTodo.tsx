import { useMemo } from "react"
import ToDoCard from "./ToDoCard"

interface TodDoDate{
  [key: string]: string
}

type TodoType = {
  _id: string,
  todoAt: string,
  todoText: string,
  createdAt: TodDoDate,
  todoPriority: string,
  completed: boolean,
}
interface CTodoProps{
  title: string,
  collectionOfTodo: TodoType [] | []
}
const CTodo:React.FC<CTodoProps> = ({
  title,
  collectionOfTodo
}) => {

  const renderToDo = useMemo(() => {
    const result = []
    for(let i = 0; i < collectionOfTodo.length; i++){
      result.push(
        <ToDoCard
          title={collectionOfTodo[i].todoText}
          id={collectionOfTodo[i]._id}
          dateFor={collectionOfTodo[i].createdAt}
          completed={collectionOfTodo[i].completed}
          priority={collectionOfTodo[i].todoPriority}
        />
      )
    }
    return result 
  }, [collectionOfTodo]) 

  if(collectionOfTodo.length !== 0){
    return ( 
      <div className="flex flex-col gap-4">
        <h3 className="text-neutral-500 dark:text-neutral-400">{title}</h3>
        <div className="flex flex-col gap-4">
          {renderToDo}
        </div>
      </div>
    )
  }
}
 
export default CTodo;