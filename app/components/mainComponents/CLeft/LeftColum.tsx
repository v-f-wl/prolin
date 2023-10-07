import FlexGrid from "../UI/FlexGrid";
import WeatherWidget from "./WeatherWidget";
import WorkSchedule from "./WorkSchedule";

const LeftColum = () => {
  return ( 
    <FlexGrid>
      <WeatherWidget/>
      <WorkSchedule/>
    </FlexGrid>
   );
}
 
export default LeftColum;