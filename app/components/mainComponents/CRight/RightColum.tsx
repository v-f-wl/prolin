import FlexCenter from "../../UI/FlexCenter";

const RightColum = () => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="text-center">Your Profile</div>
      <FlexCenter className="flex-col gap-2">
        <div className="w-[92px] h-[92px] rounded-full bg-neutral-200 border-2 border-blue-400"></div>
        <div className="text-3xl font-semibold text-gray-600">Nika Avar</div>
      </FlexCenter>
    </div>
   );
}
 
export default RightColum;