import SubTitle from "@/components/SubTitle";
import { useState } from "react";

{/* <option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
<option value="Urgent">Urgent</option>
<option value="Critical">Critical</option> */}
interface TaskPriorityType{
  value: string,
  color: string
}

const CreatePriority = () => {
  const [taskPriority, setTaskPriority] = useState<TaskPriorityType[]> ([
    {
      value: 'Low',
      color: 'greenPriority'
    },
    {
      value: 'Medium',
      color: 'bluePriority'
    },
    {
      value: 'High',
      color: 'indigoPriority'
    },
    {
      value: 'Urgent',
      color: 'orangePriority'
    },
    {
      value: 'Critical',
      color: 'redPriority'
    },
  ])
  const [isActive, setIsActive] = useState('Low')

  const changePriority = (value: string) => {
    setIsActive(prev => value)
  }
  return ( 
    <div>
      <SubTitle text="Select Task Priority" />
      <div className="mt-2 flex items-center flex-wrap gap-4">
        {taskPriority.map((item, index) => (
          <div 
            onClick={() => changePriority(item.value)}
            key={`${item.value}__index__${item.color}__index`}
            className={`
              px-4 py-2 rounded-lg
              cursor-pointer transition-transform
              ${isActive !== item.value && 'hover:scale-90'}
              ${item.color}
              ${isActive === item.value && 'border-2 border-lightGreen'}
            `}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default CreatePriority;