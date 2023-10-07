'use client'
import { useState } from "react";
import { BsCheck, BsPlus } from "react-icons/bs";

interface NotificationProps{
  status: boolean,
  title: string,
  description: string,
  onDelete: () => void
}
const Notification: React.FC<NotificationProps> = ({
  status,
  title,
  description,
  onDelete
}) => {

  const [animationDelete, setAnimationDelete] = useState(false)

  const deleteNotification = () => {
    setAnimationDelete((value) => value = true)
    onDelete()
  }
  return (  
    <div className={`

        ${animationDelete ? '' : 'hover:scale-105'}
        ${animationDelete ? 'notificationAnimation' : ''}
      bg-white 
        dark:bg-neutral-700
        p-4 
        rounded-xl 
        flex 
        justify-between
        items-center 
        transition-all duration-300
      `}>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-notification items-center gap-x-2">
          {status ? (
            <div className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center">
              <BsCheck size={24}/>
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-red-400 text-white flex items-center justify-center">
              <BsPlus size={26} className="rotate-45 "/>
            </div>
          )}
          <div className="font-medium text-lg">{title}</div>
          <div className="notification text-neutral-500 dark:text-neutral-300">{description}</div>
        </div>
      </div>
      <div 
        onClick={deleteNotification}
        className="border-l px-4 py-2 cursor-pointer"
      >
        Close
      </div>
    </div>
  );
}
 
export default Notification;