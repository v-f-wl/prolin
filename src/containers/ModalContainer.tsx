import ChildrenProps from "@/types/containerType";

interface ModalContainerProps{
  isOpen: boolean
}
type ModalContainerType = ModalContainerProps & ChildrenProps
const ModalContainer:React.FC<ModalContainerType> = ({
  isOpen,
  children
}) => {
  return ( 
    <div
      className={`
        ${isOpen ? '' : 'opacit-0 invisible'} 
        fixed inset-0 z-50
        max-w-screen max-h-screen overflow-hidden
        w-ful h-full 
        flex items-center justify-center
        bg-black/40 
      `}
    >
      <div
        className={`
          ${isOpen ? 'modal-enter' : 'modal-exit'}
          p-7 
          flex flex-col gap-5
          max-w-5xl w-full 
          bg-lightBg dark:bg-darkBg 
          rounded-xl
        `}
      >
        {children}
      </div>
    </div>
  );
}
 
export default ModalContainer;