import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PriorityItem from "./PriorityItem";

const PriorityMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedPriority, setSelectedPriority] = useState('Not Important')

  const changeSelectedPriority = ({label} : {label : string}) => {
    setSelectedPriority(label)
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

        <div className={`${selectedPriority !== 'Not Important' ? 'block text-green-400/60' : 'hidden'}`}>Selected</div>
      </div>

      <div className={`${isOpen ? 'h-[80px]' : 'h-0 overflow-hidden invisible'} transition-all flex flex-wrap gap-x-4 gap-y-3`}>
        <PriorityItem isActive={selectedPriority} selectValue={changeSelectedPriority} color="#AEABAB" title="Not Important"/>
        <PriorityItem isActive={selectedPriority} selectValue={changeSelectedPriority} color="#0891B2" title="Low Priority"/>
        <PriorityItem isActive={selectedPriority} selectValue={changeSelectedPriority} color="#15803D" title="Medium Priority"/>
        <PriorityItem isActive={selectedPriority} selectValue={changeSelectedPriority} color="#7C3AED" title="High Priority"/>
        <PriorityItem isActive={selectedPriority} selectValue={changeSelectedPriority} color="#9D174D" title="Very Important"/>
      </div>
    </div>
  )
}
 
export default PriorityMenu;