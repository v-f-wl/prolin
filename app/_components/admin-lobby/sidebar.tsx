import Logo from "../lobbyUI/logo";
import MenuSidebar from "./menu-sidebar";

const SideBar = () => {
  return ( 
    <div className="flex flex-col gap-5 w-full">
      <Logo/>
      <MenuSidebar/>
    </div>
  );
}
 
export default SideBar;