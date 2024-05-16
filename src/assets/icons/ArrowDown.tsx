import IconProps from "@/types/iconType";

const ArrowDown:React.FC<IconProps> = ({size}) => {
  return ( 
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0405 11.9596C22.431 12.3502 22.431 12.9833 22.0405 13.3739L16.7072 18.7072C16.3167 19.0977 15.6835 19.0977 15.293 18.7072L9.95964 13.3739C9.56912 12.9833 9.56912 12.3502 9.95964 11.9596C10.3502 11.5691 10.9833 11.5691 11.3739 11.9596L16.0001 16.5859L20.6263 11.9596C21.0168 11.5691 21.65 11.5691 22.0405 11.9596Z" fill="var(--greenColor)"/>
    </svg>
  );
}
 
export default ArrowDown;