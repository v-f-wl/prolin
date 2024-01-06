'use client'

import { useAppSelector } from "@/app/redux/store";
import Widget from "../../UI/Widget";
import HeaderRating from "./HeaderRating";
import RatingValue from "./RatingValue";

const RatingModal = () => {
  const isOpen = useAppSelector(store => store.RatingModal.value)

  return ( 
    <div className={`${isOpen ? 'flex items-center justify-center' : 'hidden'} fixed inset-0 max-h-full bg-stone-500/70 dark:bg-gray-800/70 z-50`}>
      <Widget className="w-[780px] p-6 flex flex-col gap-7">
        <HeaderRating/>
        <RatingValue/>
      </Widget>
    </div>
  );
}
 
export default RatingModal;