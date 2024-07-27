'use client'
import { useActionState, useMemo, useState } from "react";
import ModalSwitch from "./modal-switch";
import CreateTab from "./create-tab";
import RoundTab from "./round-tab";
import { useDispatch, useStore } from "react-redux";
import { switchCreateModal } from "@/redux/features/switchModal-slice";
import { useAppSelector } from "@/redux/store";

const ModalCreate = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'round'>('create')
  const dispatch = useDispatch()
  const isOpenModal = useAppSelector(store => store.switchModal.createModal)
  const renderTab = useMemo(() => {
    switch(activeTab){
      case 'create': {
        return <CreateTab/>
      }
      case 'round': {
        return <RoundTab/>
      }
      default: {
        return <CreateTab/>
      }
    }
  },[activeTab])

  const handleChangeTab = (value: string) => {
    if(value === 'create' || value === 'round') setActiveTab(prev => value)
  }

  return ( 
    <div 
      className={`
        ${isOpenModal ? 'bg-gray-700/50 visible' : 'bg-inherit invisible'}
        absolute 
        flex items-center justify-center
        inset-0 
        bg-gray-700/50 
      `}
    >
      <div 
        className={`
          ${isOpenModal ? 'opacity-100 scale-100 duration-500' : 'opacity-0 scale-40'}
          w-3/4 h-4/5 bg-white rounded-xl relative px-12 py-8 flex flex-col gap-4 items-center
          transition-all
        `}
      >
        <div 
          onClick={() => dispatch(switchCreateModal(false))}
          className="absolute top-4 right-4 cursor-pointer"
        >
          Close
        </div>
        <ModalSwitch selectedValue={activeTab} onChange={handleChangeTab}/>
        {renderTab}
      </div>
    </div>
  );
}
 
export default ModalCreate;