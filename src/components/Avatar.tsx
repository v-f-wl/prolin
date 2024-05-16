interface AvatarProps{
  size: string,
  image?: string,
  rotate?: number,
  bgColor: string
}
const Avatar: React.FC<AvatarProps> = ({
  size,
  image,
  bgColor
}) => {
  return ( 
    <div 
      className={`
        flex items-center justify-center
        size-[${size}px]
        rounded-full border p-1
      `}
    >
      {image}
    </div>
  );
}
 
export default Avatar;