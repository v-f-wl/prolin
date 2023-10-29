import FlexBetween from "../../UI/FlexBetween";
import FlexCenter from "../../UI/FlexCenter";
import InfoBtn from "../../UI/InfoBtn";
import WidgetTitle from "../../UI/WidgetTitle";
import Widget from "../UI/Widget";
import CAssess from "./assess/CAssess";
import MSchedule from "./meeting/MSchedule";

const MeetingWidget = () => {
  return (  
    <Widget>
      <CAssess>
        <FlexBetween>
          <WidgetTitle title="Meeting"/>
          <FlexCenter className="gap-8">
            <div className="">More</div>
            <InfoBtn style="green" icon={true}  title="Add Meeting"/>
          </FlexCenter>
        </FlexBetween>
        <MSchedule/>
      </CAssess>
    </Widget>
  );
}
 
export default MeetingWidget;