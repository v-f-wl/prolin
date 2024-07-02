'use client'
const SidebarButton = ({
  isActive,
  onClick,
  icon,
  label
}:{
  isActive: boolean,
  onClick: (label: string | '') => void,
  icon?: React.ReactNode,
  label: string
}) => {

  const handleClicButton = (label: string) => {
    if(onClick) onClick(label)
  }
  return (  
    <div 
      onClick={() => handleClicButton(label)}
      className={`
        ${isActive ? 'bg-cyan-500/70 text-white  fill-white scale-110' : 'bg-white text-black fill-black scale-100'}
        w-11 h-11
        flex items-center justify-center
        rounded-full transition-all duration-300
      `}
    >
      {icon}
    </div>
  );
}
 
export default SidebarButton;