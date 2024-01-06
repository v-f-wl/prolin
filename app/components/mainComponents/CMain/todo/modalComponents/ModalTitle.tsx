import FlexBetween from "@/app/components/UI/FlexBetween";
import { changeToDoModal } from "@/app/redux/features/ToDoModal";
import { AppDispatch } from "@/app/redux/store";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const ModalTitle = () => {
  const dispatch = useDispatch<AppDispatch>()

  const closeModal = () => {
    dispatch(changeToDoModal(false))
  }
  return (  
    <FlexBetween>
      <h2 className="exo font-semibold text-2xl">Add ToDo</h2>
      <div 
        onClick={closeModal}
        className="flex gap-1 cursor-pointer hover:opacity-70 transition-opacity"
      >
          Close <IoCloseOutline size={24}/>
        </div>
    </FlexBetween>
  );
}
 
export default ModalTitle;