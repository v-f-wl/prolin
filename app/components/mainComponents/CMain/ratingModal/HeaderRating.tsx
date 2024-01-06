'use clien'

import FlexBetween from "@/app/components/UI/FlexBetween";
import { changeRatingModal } from "@/app/redux/features/RatingModal";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

const HeaderRating = () => {
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(changeRatingModal(false))
  }
  return ( 
    <FlexBetween>
      <div className="font-bold text-3xl font-[montserrat]">
        Daily Assessment
      </div>
      <div 
        onClick={closeModal}
        className="flex items-center gap-1 cursor-pointer"
      >
        Close <IoCloseOutline size={24}/>
      </div>

    </FlexBetween>
  );
}
 
export default HeaderRating;