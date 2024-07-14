'use client'
import { useState } from "react";
import UserMenu from "./user-menu";
import SubTitle from "../UI/subtitle";

const MenuUsers = () => {
  const [openMenuUser, setOpenMenuUser] = useState('')

  const openMenu = (id: string) => {
    if(id === openMenuUser){
      return setOpenMenuUser(() => '')
    }
    setOpenMenuUser(() => id)
      

  }
  return (
    <div className="flex flex-col gap-5 w-full">
      <SubTitle text="List of users"/>
      <div className="flex flex-col gap-2">
        <UserMenu label="Kim Valentin" userId="sv423f" profession="Designer" openId={openMenuUser} openMenu={openMenu}/>
        <UserMenu label="Tom Luirfer " userId="sv42sdfvdf3f" profession="Developer" openId={openMenuUser} openMenu={openMenu}/>
        <UserMenu label="Anna Mer" userId="sv42svdf3f" profession="Project Manager" openId={openMenuUser} openMenu={openMenu}/>
      </div>
    </div>
  );
}
 
export default MenuUsers;