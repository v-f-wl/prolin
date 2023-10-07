import {HiMenuAlt1} from 'react-icons/hi'
import { BiSolidExit } from 'react-icons/bi';
import MenuList from './leftMenu/MenuList';
const LeftMenu = () => {
  return (  
    <div 
      className="
        fixed 
        flex 
        flex-col 
        gap-10 
        top-0 
        left-0 
        h-screen 
        items-center z-10 transition-all
        p-10 
        w-[80px] 
        bg-white 
        dark:bg-neutral-700
        dark:text-white
        text-neutral-700
      "
    >
      <HiMenuAlt1 size={38}/>
      <MenuList/>
      <BiSolidExit className='mt-auto' size={38}/>
    </div>
  );
}
 
export default LeftMenu;