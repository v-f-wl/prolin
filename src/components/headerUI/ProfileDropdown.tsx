import Avatar from "../Avatar";
import Dropdown from "./Dropdown";

const ProfileDropdown = () => {
  return ( 
    <div className="flex items-center gap-2 relative">
      <Avatar size='32' image="0_0" bgColor="a22a22"/>
      <div className="font-medium text-lg">
        Valentin Kim
      </div>
      <Dropdown/>
    </div>
  );
}
 
export default ProfileDropdown;