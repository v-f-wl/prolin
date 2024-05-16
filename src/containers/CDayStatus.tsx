import ChildrenProps from "@/types/containerType";

const CDayStatus:React.FC<ChildrenProps> = ({children}) => {
  return ( 
    <div className="grid grid-cols-status gap-5 min-h-[400px]">
      {children}
    </div>
  );
}
 
export default CDayStatus;