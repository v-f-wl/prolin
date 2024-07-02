'use client'
import { useState } from "react";
import SidebarButton from "../lobbyUI/sidebar-button";
import MenuUsers from "./users-tab";
import IProfile from "@/_assets/icons/IProfile";
import IChart from "@/_assets/icons/IChart";
import ISettings from "@/_assets/icons/ISettings";
import HistoryTab from "./history-tab";

const MenuSidebar = () => {
  const [activeTab, setActiveTad] = useState('users')

  const handleChangeTab = (label: string) => {
    if(label) setActiveTad(() => label)
  }

  return ( 
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        <SidebarButton label="users" isActive={activeTab === 'users'} onClick={handleChangeTab} icon={<IProfile size="24"/>}/>
        <SidebarButton label="history" isActive={activeTab === 'history'} onClick={handleChangeTab} icon={<IChart size="24"/>}/>
        <SidebarButton label="settings" isActive={activeTab === 'settings'} onClick={handleChangeTab} icon={<ISettings size="24"/>}/>
        <SidebarButton label="exit" isActive={false} onClick={handleChangeTab}/>
      </div>
      
      <MenuUsers/>
      {/* <HistoryTab/> */}
    </div>
  );
}
 
export default MenuSidebar;