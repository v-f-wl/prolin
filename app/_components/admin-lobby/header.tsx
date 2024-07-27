'use client'
import ICrown from "@/_assets/icons/ICrown";
import IID from "@/_assets/icons/IID";
import ILink from "@/_assets/icons/ILink";
import { switchCreateModal } from "@/redux/features/switchModal-slice";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const dispatch = useDispatch()
  return ( 
    <div className="flex justify-between h-11">
      <div className="px-4 flex items-center gap-11 bg-white rounded-full">
        <div className="flex items-center gap-2">
          <ILink size="24"/>
          Copy Lobby Link
        </div>
        <div className="flex items-center gap-2">
          <IID size="24"/>
            Copy Lobby ID
        </div>
      </div>
      <div 
        onClick={() => dispatch(switchCreateModal(true))}
        className="px-4 flex items-center gap-2 bg-white rounded-full cursor-pointer"
      >
        <ICrown size="24"/>
        Create a new game
      </div>
    </div>
  );
}
 
export default AdminHeader;