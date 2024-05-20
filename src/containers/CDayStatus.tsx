import ChildrenProps from "@/types/containerType";

interface CDayStatusProps{
  className?: string
}
type CDayStatusType = ChildrenProps & CDayStatusProps
const CDayStatus:React.FC<CDayStatusType> = ({children, className}) => {
  return ( 
    <div className={`grid grid-cols-status gap-5 min-h-[400px] ${className}`}>
      {children}
    </div>
  );
}
 
export default CDayStatus;