'use client'
import FlexCenter from "@/app/components/UI/FlexCenter";
import { useAppSelector } from "@/app/redux/store";
import { BsStars } from 'react-icons/bs'
const ProfileName = () => {

  const isLoaded = useAppSelector((store) => store.Loading.value)

  if(!isLoaded){
    return (
      <FlexCenter className="flex-col gap-3">
        <div className="w-[92px] h-[92px] rounded-full bg-neutral-200 dark:bg-neutral-500 animate-pulse"></div>
        <div className="w-[90%] h-9 bg-neutral-200 dark:bg-neutral-500 animate-pulse rounded-xl"></div>
      </FlexCenter>
    )
  }
  return ( 
    <FlexCenter className="flex-col gap-2">
      <img 
        src="https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png?w=512&ssl=1" 
        className="w-[92px] h-[92px] rounded-full bg-neutral-200 border-2 border-blue-400"
      />
      <div className="text-3xl font-semibold text-gray-600 dark:text-gray-200 flex items-center gap-3">Nika Avar <div className="flex text-lg items-center gap-1 text-white px-2 rounded proLabelGradient"><BsStars/>Pro</div></div>
    </FlexCenter>
  );
}
 
export default ProfileName;