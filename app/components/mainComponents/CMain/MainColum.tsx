import FlexGrid from "../UI/FlexGrid";
import AssessWidget from "./AssessWidget";
import MeetingWidget from "./MeetingWidget";
import TodoWidget from "./TodoWidget";

const MainColum = () => {
  return ( 
    <FlexGrid>
      <AssessWidget/>
      <TodoWidget/>
      <MeetingWidget/>
    </FlexGrid>
  );
}
 
export default MainColum;