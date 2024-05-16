import SubTitle from "@/components/SubTitle";
import Description from "./Description";

const MounthSlider = () => {
  return ( 
    <div className="flex flex-col gap-4 items-center">
      <SubTitle text="This mounth status"/>

      <div className="flex gap-10">
        <div className="size-40 rounded-full border-2"></div>
        <div className="size-40 rounded-full border-2"></div>
        <div className="size-40 rounded-full border-2"></div>
      </div>
      <Description/>
    </div>
   );
}
 
export default MounthSlider;