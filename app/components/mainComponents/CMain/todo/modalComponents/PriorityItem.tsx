interface PriorityItemProps{
  color: string,
  title: string,
  selectValue: ({label} : {label: string}) => void,
  isActive: string
}
const PriorityItem:React.FC<PriorityItemProps> = ({color, title, selectValue, isActive}) => {
  return ( 
    <div 
      onClick={() => selectValue({label: title})}
      className={`${isActive === title ? 'border-violet-400' : 'border-neutral-500/10'} py-0.5 px-2 border-2 flex items-center gap-2 rounded-lg`}
    >
      <div className="h-4 w-4 rounded" style={{background: color}}></div>
      <div className="">{title}</div>
    </div>
  )
}
 
export default PriorityItem;