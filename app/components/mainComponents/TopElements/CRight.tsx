import { IoSettingsOutline } from 'react-icons/io5'
import Switch from './Switch';
const CRight = () => {
  return ( 
    <div className="flex items-center justify-between text-neutral-600 dark:text-white">
      <IoSettingsOutline size={28}/>
      <Switch/>
    </div>
   );
}
 
export default CRight;