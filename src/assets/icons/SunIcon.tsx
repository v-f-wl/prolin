import IconProps from "@/types/iconType";

const SunIcon:React.FC<IconProps> = ({size}) => {
  return ( 
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
      <path d="M11 2.9V2M11 20V19.1M19.1 11H20M2 11H2.9M16.85 5.15L18.2 3.8M3.8 18.2L5.15 16.85M3.8 3.8L5.15 5.15M16.85 16.85L18.2 18.2" stroke="var(--bw)" stroke-width="2" stroke-linecap="round"/>
      <path d="M11 14.5999C12.9882 14.5999 14.6 12.9881 14.6 10.9999C14.6 9.01168 12.9882 7.3999 11 7.3999C9.0118 7.3999 7.40002 9.01168 7.40002 10.9999C7.40002 12.9881 9.0118 14.5999 11 14.5999Z" stroke="var(--bw)" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>

   );
}
 
export default SunIcon;