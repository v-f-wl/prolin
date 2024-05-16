import ArrowDown from "@/assets/icons/ArrowDown";

interface StatusTabProps{
  title: string,
  isActive: boolean,
  onClick: () => void
}
const StatusTab: React.FC<StatusTabProps> = ({
  title,
  isActive,
  onClick
}) => {
  return ( 
    <div 
      onClick={onClick}
      className={`
        py-2
        ${isActive ? 'opacity-100' : 'opacity-40'}
        flex items-center gap-1
        transition-all cursor-pointer
      `}
    >
      <div 
        className={`
          ${isActive ? 'opacity-100' : 'opacity-0'}
          -rotate-90
        `}
      >
        <ArrowDown size="24"/>
      </div>
      <div className="">{title}</div>
    </div>
  );
}
 
export default StatusTab;