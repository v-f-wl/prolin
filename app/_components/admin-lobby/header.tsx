import ICrown from "@/_assets/icons/ICrown";
import IID from "@/_assets/icons/IID";
import ILink from "@/_assets/icons/ILink";

const AdminHeader = () => {
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
      <div className="px-4 flex items-center gap-2 bg-white rounded-full">
        <ICrown size="24"/>
        Create a new game
      </div>
    </div>
  );
}
 
export default AdminHeader;