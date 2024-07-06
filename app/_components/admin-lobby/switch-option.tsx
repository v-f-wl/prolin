const SwitchOption = ({
  isActive,
  optionName,
  onClick,
  title
} : {
  isActive: boolean
  optionName: string,
  onClick: (value: string) => void,
  title: string
}) => {
  return ( 
    <div 
      onClick={() => onClick(optionName)}
      className={`
        ${isActive ? 'bg-white' : ''}
        transition-all duration-300
        px-4 rounded-full h-full flex items-center justify-center cursor-pointer
      `}
    >
      {title}
    </div>
   );
}
 
export default SwitchOption