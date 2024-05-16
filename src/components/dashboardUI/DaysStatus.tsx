import CDayStatus from "@/containers/CDayStatus";
import SubTitle from "../SubTitle";
import HorizontalTab from "./dayStatus/HorizontalTab";

const DaysStatus = () => {
  return ( 
    <CDayStatus>
      <div className="border p-7 rounded-xl flex gap-4 items-center">
        <HorizontalTab/>
      </div>
      <div className="border">sv</div>
    </CDayStatus>
  );
}
 
export default DaysStatus;