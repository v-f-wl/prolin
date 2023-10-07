'use client'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { RiTreasureMapFill, RiTeamFill } from 'react-icons/ri'
import { BiSolidExit } from 'react-icons/bi'
import Link from 'next/link'
const MenuList = () => {
  const linksInfo = [
    {
      icon: BsGrid1X2Fill,
      href: './',
      label: ''
    },
    {
      icon: RiTreasureMapFill,
      href: './pomodoro',
      label: 'pomodoro'
    },
    {
      icon: RiTeamFill,
      href: './team',
      label: 'team'
    },
  ]
  return ( 
    <div className="my-10 h-full flex flex-col items-center">
      <div className="flex flex-col gap-10">
        {linksInfo.map((item, index) => (
          <Link 
            href={item.href} 
            key={`${index}left`}
            className={`
              p-2 
              rounded-lg
            `}
          >
            <item.icon size={24}/>
          </Link>
        ))}
      </div>
    </div>
  )
}
 
export default MenuList;