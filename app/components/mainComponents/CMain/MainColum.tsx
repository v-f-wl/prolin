import FlexGrid from "../UI/FlexGrid";
import AssessWidget from "./AssessWidget";
import MeetingWidget from "./MeetingWidget";
import TodoWidget from "./TodoWidget";

const MainColum = () => {
  return ( 
    <FlexGrid>
      <AssessWidget/>
      {/* <MeetingWidget/> */}
      <TodoWidget/>
    </FlexGrid>
  );
}
 
export default MainColum;