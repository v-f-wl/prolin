import Button from "@/components/Button";
import { SubList } from "@/types/todoType";
import SubTodo from "./SubTodo";


interface TodoCardProps{
  value: string,
  date: string,
  tag: string,
  type: string,
  id: string,
  link?: string,
  list?: Array<SubList> | undefined,
  isOpen: boolean

}
const TodoCard:React.FC<TodoCardProps> = ({
  value,
  date,
  tag,
  type,
  id,
  link,
  list,
  isOpen
}) => {


  return (  
    <div 
      className={`
        ${isOpen ? '' : 'scale-[.95] translate-y-6'} transition-all duration-500
        p-4 border border-black/40 dark:border-white/50 rounded-xl
        flex flex-col gap-4
        font-light
      `}
    >
      <div className="flex items-center gap-4 text-sm">
        <div className="opacity-75">
          <div className="">

          </div>
          <div className="">
            {date}
          </div>
        </div>
        <div className="py-1 px-3 rounded-full text-red-500 bg-red-500/10">{tag}</div>
      </div>
      <div className="text-xl">{value}</div>
      <div className="flex flex-col gap-3">
        {list && list.length !== 0 && list.map((item) => (
          <SubTodo completed={item.completed} id={item.id} value={item.value}/>
        ))}

      </div>
      <div className="border-t h-px border-opacity-10"></div>
      <div className="flex gap-4 items-center">
        <Button value="Complete" onClick={() => {}} style="fill"/>
        <Button value="Edit" onClick={() => {}} style="outline"/>
      </div>
    </div>
   );
}
 
export default TodoCard;