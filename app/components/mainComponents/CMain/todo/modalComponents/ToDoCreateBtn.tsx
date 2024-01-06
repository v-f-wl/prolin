
interface ToDoCreateBtnProps{
  isMute: boolean
}
const ToDoCreateBtn:React.FC<ToDoCreateBtnProps> = ({isMute}) => {
  const Btn = ({title, isActive} : {title: string, isActive?: boolean}) => (
    <div 
      className={`
        ${isActive ? 'bg-teal-600 border-teal-600 dark:bg-teal-800 dark:border-teal-800' : 'bg-gray-600 border-gray-600 dark:bg-gray-800 dark:border-gray-800'} 
        ${isMute ? 'cursor-default' : 'cursor-pointer hover:border-white transition-all'}
        rounded-md py-2 px-3 border-2 text-white 
      `}
    >
      {title}
    </div>
  )
  return ( 
    <div className={`${isMute ? 'opacity-40' : 'opacity-100'} flex items-center gap-4`}>
      <Btn title="Create" isActive={true}/>
      <Btn title="Save as Draft"/>
    </div>
  );
}
 
export default ToDoCreateBtn;