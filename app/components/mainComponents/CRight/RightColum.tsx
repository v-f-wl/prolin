import FlexCenter from "../../UI/FlexCenter";
import Calendare from "./RightUI/Calendare";
import ProBtn from "./RightUI/ProBtn";
import ProfileName from "./RightUI/ProfileName";

const RightColum = () => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="text-center">Your Profile</div>
      <ProfileName/>
      {/* <Calendare/> */}
      <ProBtn/>
    </div>
   );
}
 
export default RightColum;