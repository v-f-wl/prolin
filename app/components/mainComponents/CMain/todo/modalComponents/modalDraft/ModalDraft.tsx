import FlexCenter from "@/app/components/UI/FlexCenter";
import DraftCard from "./DraftCard";

const ModalDraft = ({isCurrent} : {isCurrent: boolean}) => {
  const arr = []
  return ( 
    <div className={`${isCurrent ? 'flex flex-col gap-6' : 'hidden'}`}>
      {arr.length > 0 ? 
      (
        <>
          <DraftCard/>
          <DraftCard/>
          <DraftCard/>
        </>
      ) 
      : 
      (
        <FlexCenter className="h-[250px]">
          <div className="text-2xl text-neutral-200 font-medium">You don't have any draft notes yet</div>
        </FlexCenter>
      )}

    </div>
  );
}
 
export default ModalDraft;