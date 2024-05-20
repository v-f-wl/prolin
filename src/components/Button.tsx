
interface ButtonProps{
  value: string,
  onClick: () => void,
  Icon?: string,
  style: 'fill' | 'outline' | 'green',
  className?: string
}
const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  Icon,
  style,
  className
}) => {
  return ( 
    <div 
      onClick={onClick}
      className={`
        min-w-[100px] 
        py-1 px-4 
        flex items-center justify-center gap-1
        font-redular text-lg text-center
        rounded-xl
        cursor-pointer transition-all hover:opacity-75
        border-2
        ${className}
        ${style === 'fill' && ' border-foregroundDark dark:border-foregroundLight bg-foregroundDark dark:bg-foregroundLight text-white dark:text-black'}
        ${style === 'outline' && 'border-foregroundDark dark:border-foregroundLight text-black dark:text-white'}
        ${style === 'green' && 'border-lightGreen dark:border-darkGreen'}
      `}
    >
      {value}
    </div>
  );
}
 
export default Button;