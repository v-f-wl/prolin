import { BsPlus } from "react-icons/bs";

interface InfoBtnProps{
  title: string;
  style: 'green' | 'blue' | 'gray' | 'purple';
  icon?: boolean
}
const InfoBtn: React.FC<InfoBtnProps> = ({title, style, icon}) => {
  return ( 
    <div 
      className={`
        px-2
        border-2 font-bold text-xl font-['Open_Sans'] flex items-center
        ${style == 'green' && 'badge-green'}
        ${style == 'blue' && 'badge-blue'}
        ${style == 'purple' && 'badge-purple'}
        ${style == 'gray' && 'badge-gray'}
        ${icon && 'bg-green-300/10 dark:bg-white/0 cursor-pointer'} exo
        justify-center 
        py-2 
        border rounded-xl
      `}
    >
      {icon && <BsPlus size={28}/>}
      {title}
    </div>
  );
}
 
export default InfoBtn;