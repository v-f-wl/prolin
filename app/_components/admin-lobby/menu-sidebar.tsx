'use client'
import { useMemo, useState } from "react";
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

  const renderActiveTab = useMemo(() => {
    switch (activeTab) {
      case 'users':
        return <MenuUsers />;
      case 'history':
        return <HistoryTab />;
      case 'dashboard':
        return <MenuUsers />;
      default:
        return <MenuUsers/>;
    }
  }, [activeTab])
  return ( 
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        <SidebarButton label="users" isActive={activeTab === 'users'} onClick={handleChangeTab} icon={<IProfile size="24"/>}/>
        <SidebarButton label="history" isActive={activeTab === 'history'} onClick={handleChangeTab} icon={<IChart size="24"/>}/>
        <SidebarButton label="settings" isActive={activeTab === 'settings'} onClick={handleChangeTab} icon={<ISettings size="24"/>}/>
        <SidebarButton label="exit" isActive={false} onClick={handleChangeTab}/>
      </div>
      
      {renderActiveTab}
    </div>
  );
}
 
export default MenuSidebar;