import { useMemo } from "react"
import ToDoCard from "./ToDoCard"
import { FaRegFaceSmileBeam } from 'react-icons/fa6'

type TodoType = {
  id: string,
  todoAt: string,
  title: string,
  check: boolean
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
          title={collectionOfTodo[i].title}
          dateFor={collectionOfTodo[i].todoAt}
          checked={collectionOfTodo[i].check}
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

  return(
    <div className="flex flex-col gap-4">
      <h3 className="text-neutral-500 dark:text-neutral-400">{title}</h3>
      <div className="flex gap-3 items-center justify-center text-center text-blue-200">
        Haven`t Todo <FaRegFaceSmileBeam/>
      </div>
    </div>
  )
}
 
export default CTodo;