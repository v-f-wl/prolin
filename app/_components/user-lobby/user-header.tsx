import Logo from "../lobbyUI/logo";

const UserHeader = () => {
  return ( 
    <div className="flex justify-between items-center">
      <Logo/>
      <div className="">Exit</div>
    </div>
   );
}
 
export default UserHeader;