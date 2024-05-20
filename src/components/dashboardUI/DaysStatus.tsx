import CDayStatus from "@/containers/CDayStatus";
import SubTitle from "../SubTitle";
import HorizontalTab from "./dayStatus/HorizontalTab";
import CurrentRating from "./dayStatus/CurrentRating";

const DaysStatus = () => {
  return ( 
    <CDayStatus>
      <div className="border p-7 rounded-xl flex gap-4 items-center">
        <HorizontalTab/>
      </div>
      <CurrentRating/>
    </CDayStatus>
  );
}
 
export default DaysStatus;