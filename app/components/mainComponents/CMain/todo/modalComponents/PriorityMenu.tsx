import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PriorityItem from "./PriorityItem";

interface PriorityMenuProps{
  priorityValue: string,
  changePriority: (label: 'todoText' | 'todoPriority' | 'todoCategory' , value: string) => void
}
const PriorityMenu:React.FC<PriorityMenuProps> = ({
  changePriority,
  priorityValue
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const changeSelectedPriority = ({title} : {title : string}) => {
    changePriority('todoPriority', title)
  }
  return ( 
    <div className="flex flex-col gap-5">

      <div className="flex gap-6 items-center">
        <div 
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          Task Priority 
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </div>

        <div className={`${priorityValue !== 'Not Important' ? 'block text-green-400/60' : 'hidden'}`}>Selected</div>
      </div>

      <div className={`${isOpen ? 'h-[80px]' : 'h-0 overflow-hidden invisible'} transition-all flex flex-wrap gap-x-4 gap-y-3`}>
        <PriorityItem isActive={priorityValue} selectValue={changeSelectedPriority} color="#AEABAB" title="Not Important"/>
        <PriorityItem isActive={priorityValue} selectValue={changeSelectedPriority} color="#0891B2" title="Low Priority"/>
        <PriorityItem isActive={priorityValue} selectValue={changeSelectedPriority} color="#15803D" title="Medium Priority"/>
        <PriorityItem isActive={priorityValue} selectValue={changeSelectedPriority} color="#7C3AED" title="High Priority"/>
        <PriorityItem isActive={priorityValue} selectValue={changeSelectedPriority} color="#9D174D" title="Very Important"/>
      </div>
    </div>
  )
}
 
export default PriorityMenu;