import FlexBetween from "@/app/components/UI/FlexBetween";
import Loading from "./UI/Loading";
import YGradient from "./UI/YGradient";

const YInfo = () => {
  return ( 
    <FlexBetween className="pb-6">
      <Loading/>
      <div className="flex">
        2023
      </div>
      <YGradient/>
    </FlexBetween>
  )
}
 
export default YInfo;