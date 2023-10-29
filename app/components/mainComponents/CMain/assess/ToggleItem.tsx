import FlexCenter from "@/app/components/UI/FlexCenter"

interface ToggleItemProps{
  title: string,
  id: string,
  currrent: string,
  toggleValue: (label: string) => void
}
const ToggleItem: React.FC<ToggleItemProps> = ({title, id, currrent, toggleValue}) => {
  return ( 
    <div 
      onClick={() => toggleValue(id)}
      className="flex items-center gap-2"
    >
      <FlexCenter className={`p-0.5 border-2 rounded-2xl ${id === currrent ? 'border-sky-400 dark:border-sky-500' : 'border-gray-300 dark:border-gray-500'}`} >
        <div className={`h-3 w-3 ${id === currrent ? 'bg-sky-400 dark:bg-sky-500' : 'bg-gray-300 dark:bg-gray-500'} rounded-2xl`}>
        </div>
      </FlexCenter>
      <div className={`${id === currrent ? 'text-sky-400 dark:text-sky-500' : 'text-gray-300 dark:text-gray-500'}`}>{title}</div>
    </div>
   );
}
 
export default ToggleItem;