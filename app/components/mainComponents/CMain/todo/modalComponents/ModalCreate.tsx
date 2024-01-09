'use client'
import { useState } from "react";
import PriorityMenu from "./PriorityMenu";
import ToDoCreateBtn from "./ToDoCreateBtn";
import AddContact from "./AddContact";
import Cookies from "js-cookie";
import CategoryMenu from "./CategoryMenu";
import TodoTextarea from "./TodoTextarea";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTasks } from "@/app/redux/features/ToDoHandler";

interface todoDataProps{
  todoText: string,
  todoPriority: string,
  todoCategory: string
}

const ModalCreate = ({isCurrent}: {isCurrent: boolean}) => {
  const [todoData, setTodoData] = useState<todoDataProps>({
    todoText: '',
    todoPriority: 'Not Important',
    todoCategory: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const userId = Cookies.get('user_id__value')

  const handleChangeData = (label: 'todoText' | 'todoPriority' | 'todoCategory' , value: string) => {
    if(isLoading){
      return
    }
    setTodoData(prev => {
      const newObj = {...prev}
      newObj[label] = value
      return newObj
    })
  }


  
  const sendCreateRequestToServer = () => {

    if(todoData.todoText === '' || !userId){
      return
    }
    setIsLoading(true)
    axios.post('/api/createTodo', {...todoData, userId})
    .then(res => {
      setTodoData(prev => {
        const newObj = {
          todoText: '',
          todoPriority: 'Not Important',
          todoCategory: ''
        }
        return newObj

      })
      setIsLoading(false)
      dispatch(setTasks(res.data.data))
      console.log(res.data)
    })  
    .catch((error) => {
      setIsLoading(false)
      console.log(error)
    })
  }
  return ( 
    <div className={`${isCurrent ? 'flex flex-col gap-8' : 'hidden'}`}>
      <TodoTextarea textValue={todoData.todoText} changeValue={handleChangeData}/>
      <PriorityMenu priorityValue={todoData.todoPriority} changePriority={handleChangeData}/>
      <CategoryMenu categoryValue={todoData.todoCategory} changeCategory={handleChangeData}/>
      {/* <AddContact/> */}
      <ToDoCreateBtn 
        createRequest={sendCreateRequestToServer}
        isMute={todoData.todoText === ''}
        isLoading={isLoading}
      />
    </div>
   );
}
 
export default ModalCreate;