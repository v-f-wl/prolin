import ChildrenProps from "@/types/containerType";

interface ContainerProps{
  className?: string
}
type CombinedProps = ChildrenProps & ContainerProps

const FlexBetween: React.FC<CombinedProps> = ({children, className}) => {
  return ( 
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}
 
export default FlexBetween;