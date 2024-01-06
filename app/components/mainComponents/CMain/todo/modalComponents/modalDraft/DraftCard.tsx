import FlexBetween from "@/app/components/UI/FlexBetween";

interface DraftCardProps{

}

const DraftCard:React.FC<DraftCardProps> = () => {
  return ( 
    <div className="border border-gray-500 rounded-lg p-4 flex flex-col gap-3">
      <FlexBetween>
        <div className="text-neutral-400">13.10.2023</div>
        <div className="flex items-center gap-8 text-lg font-medium">
          <div className="text-green-400 cursor-pointer">Create</div>
          <div className="text-red-400 cursor-pointer">Remove</div>
        </div>
      </FlexBetween>

      <div className="text-2xl font-['Open_Sans] text-neutral-200">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
}
 
export default DraftCard;