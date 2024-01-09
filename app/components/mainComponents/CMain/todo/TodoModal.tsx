'use client'
import { useState } from "react";
import Widget from "../../UI/Widget";
import ModalCreate from "./modalComponents/ModalCreate";
import ModalSwitch from "./modalComponents/ModalSwitch";
import ModalTitle from "./modalComponents/ModalTitle";
import ModalDraft from "./modalComponents/modalDraft/ModalDraft";
import { useAppSelector } from "@/app/redux/store";

const TodoModal = () => {

  const [modal, setModal] = useState('create')
  const isOpen = useAppSelector((store) => store.ToDoModal.value)
  const changeModalValue = (label: string) => {
    setModal(label)
  }


  return ( 
    <div className={`${isOpen ? 'flex items-center justify-center' : 'hidden'} fixed inset-0  bg-stone-500/70 dark:bg-gray-800/70 z-50`}>
      <Widget className="w-[780px] p-6 flex flex-col gap-7">
        <ModalTitle/>
        <ModalSwitch changeModal={changeModalValue} currentValue={modal}/>

        <ModalCreate isCurrent={modal === 'create'}/>
        <ModalDraft isCurrent={modal === 'draft'}/>
      </Widget>
    </div>
   );
}
 
export default TodoModal;