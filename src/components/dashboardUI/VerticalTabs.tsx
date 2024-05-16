'use client'

import { useMemo, useState } from "react";
import Tab from "./Tab";
import DaysStatus from "./DaysStatus";
import TodoList from "./TodoList";
import Notification from "./Notification";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState('ToDoList')
  const tadTitles = [
    {
      value: 'Days Status',
      key: 'DaysStatus'
    }, 
    {
      value: 'ToDo List',
      key: 'ToDoList'
    }, 
    {
      value: 'Notification',
      key: 'Notification'
    }
  ]

  const changeTab = (key: string) => {
    setActiveTab(() => key)
  }

  const renderComponent = useMemo(() => {
    switch(activeTab) {
      case 'DaysStatus':
        return <DaysStatus />;
      case 'ToDoList':
        return <TodoList />;
      case 'Notification':
        return <Notification />;
      default:
        return null;
    }
  }, [activeTab]);

  return ( 
    <div className="">
      
      <div 
        className="
          p-[6px] 
          inline-flex gap-3 
          rounded-xl 
          bg-lightBg dark:bg-darkBg
        "
      >
        {tadTitles.map( item => (
          <Tab key={item.key} onClick={() => changeTab(item.key)} title={item.value}  isActive={activeTab === item.key}/>
        ))}
      </div>

      <div className="mt-4">
        {renderComponent}
      </div>

    </div>
  );
}
 
export default VerticalTabs;