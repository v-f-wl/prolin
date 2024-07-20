'use client'
import { useMemo, useState } from "react";
import ModalSwitch from "./modal-switch";
import CreateTab from "./create-tab";
import RoundTab from "./round-tab";

const ModalCreate = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'round'>('create')
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
    <div className="absolute inset-0 bg-gray-700/50 flex items-center justify-center">
      <div className="w-3/4 h-4/5 bg-white rounded-xl relative px-12 py-8 flex flex-col gap-4 items-center">
        <div className="absolute top-4 right-4 cursor-pointer">Close</div>
        <ModalSwitch selectedValue={activeTab} onChange={handleChangeTab}/>
        {renderTab}
      </div>
    </div>
  );
}
 
export default ModalCreate;