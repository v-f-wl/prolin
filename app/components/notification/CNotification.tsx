'use client'
import { useMemo } from "react";
import Notification from "./Notification";

const CNotification = () => {

  const notif = [
    {
      desc: 'Setion in ready to stop',
      title: 'Pomodoro',
      status: true,
      index:0
    },
    {
      desc: 'Setion in ready to stop',
      title: 'Team Meeting',
      status: false,
      index:1
    },
    {
      desc: 'Setion in ready to stop',
      title: 'Team Meeting',
      status: false,
      index:2
    },
  ]

  const deleteNot = (index: number) => {
    notif.splice(0, index)
    console.log(notif)
  } 
  return ( 
    <div className="absolute top-0 right-12 w-[450px] flex flex-col gap-4 transition-all duration-300">
      {/* {notif.map((item, index) => (
        <Notification
          status={item.status}
          title={item.title}
          description={item.desc}
          key={index}
          onDelete={() => deleteNot(index)}
        />
      ))} */}
    </div>
  )
}
 
export default CNotification;