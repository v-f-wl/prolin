'use client'
import { useState } from "react";
import PriorityMenu from "./PriorityMenu";
import ToDoCreateBtn from "./ToDoCreateBtn";
import AddContact from "./AddContact";

const ModalCreate = ({isCurrent}: {isCurrent: boolean}) => {
  const [textValue, setTextValue] = useState('')
  return ( 
    <div className={`${isCurrent ? 'flex flex-col gap-8' : 'hidden'}`}>
      <textarea 
        placeholder="Write your todo here..." 
        className="w-full h-[120px] resize-none p-4 rounded-lg outline-emerald-400 text-2xl bg-stone-100 dark:bg-neutral-800/30"

        onChange={(e) => setTextValue(e.target.value)}
        value={textValue}
      />
      <PriorityMenu/>
      {/* <AddContact/> */}
      <ToDoCreateBtn isMute={textValue === ''}/>
    </div>
   );
}
 
export default ModalCreate;