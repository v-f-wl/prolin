interface ModalSwitchProps{
  changeModal: (label: string) => void,
  currentValue: string
}
const ModalSwitch:React.FC<ModalSwitchProps> = ({changeModal, currentValue}) => {
  return ( 
    <div className='flex gap-2 items-center'>
      <div 
        onClick={() => changeModal('create')}
        className={`${currentValue === 'create' ? 'opacity-100' : 'opacity-40'}`}
      >
        Create Todo
      </div>
      <div className="h-4 w-0.5 bg-blue-200"></div>
      <div 
        onClick={() => changeModal('draft')}
        className={`${currentValue === 'draft' ? 'opacity-100' : 'opacity-40'}`}
      >
        Draft
      </div>
    </div>
   );
}
 
export default ModalSwitch;