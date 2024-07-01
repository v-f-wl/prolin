const Button = ({
  style,
  onClick,
  label
}: {
  style: 'color' | 'light',
  onClick: ()=> void,
  label: string
}) => {
  return ( 
    <div 
      onClick={onClick}
      className={`
        ${style === 'color' && 'bg-white text-cyan-600'}
        ${style === 'light' && 'bg-cyan-600 text-white'}
        px-7 py-2 
        rounded-xl 
        cursor-pointer
      `}
    >
      {label}
    </div>
  );
}
 
export default Button;