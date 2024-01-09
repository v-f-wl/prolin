import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ToDoCreateBtnProps{
  isMute: boolean,
  createRequest: () => void,
  isLoading: boolean
}

interface BtnProps{
  title: string, 
  isActive?: boolean,
  eventClick?: () => void,
}
const ToDoCreateBtn:React.FC<ToDoCreateBtnProps> = ({isMute, createRequest, isLoading}) => {
  
  const Btn:React.FC<BtnProps> = ({title, isActive, eventClick}) => (
    <div 
      onClick={eventClick}
      className={`
        ${isActive ? 'bg-teal-600 border-teal-600 dark:bg-teal-800 dark:border-teal-800' : 'bg-gray-600 border-gray-600 dark:bg-gray-800 dark:border-gray-800'} 
        ${isMute ? 'cursor-default' : 'cursor-pointer hover:border-white transition-all'}
        rounded-md py-2 px-3 border-2 text-white 
      `}
    >
      {title}
    </div>
  )

  if(isLoading){
    return (
      <div className="flex items-center gap-2">
        <AiOutlineLoading3Quarters className='animate-spin' />
        <div className="">Loading</div>
      </div>
    )
  }
  return ( 
    <div className={`${isMute ? 'opacity-40' : 'opacity-100'} flex items-center gap-4`}>
      <Btn 
        eventClick={createRequest}
        title="Create" isActive={true}
      />
      <Btn title="Save as Draft"/>
    </div>
  );
}
 
export default ToDoCreateBtn;