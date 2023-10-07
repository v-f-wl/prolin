
interface InfoBtnProps{
  title: string;
  style: 'green' | 'blue' | 'gray' | 'purple'
}
const InfoBtn: React.FC<InfoBtnProps> = ({title, style}) => {
  return ( 
    <div 
      className={`
        mt-4
        flex 
        border-2 font-bold text-xl font-['Open_Sans']
        ${style == 'green' && 'badge-green'}
        ${style == 'blue' && 'badge-blue'}
        ${style == 'purple' && 'badge-purple'}
        ${style == 'gray' && 'badge-gray'}
        justify-center 
        py-2 
        border rounded-xl
      `}
    >
      {title}
    </div>
  );
}
 
export default InfoBtn;