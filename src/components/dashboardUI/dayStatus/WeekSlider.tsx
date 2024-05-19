import SubTitle from "@/components/SubTitle";
import WeekGraph from "./WeekGraph";
import Description from "./Description";

const WeekSlider = () => {
  
  return ( 
    <div className="flex flex-col gap-4">
      <SubTitle text="Rating Of A Week"/>
      <WeekGraph/>
      <Description/>
    </div>
   );
}
 
export default WeekSlider;