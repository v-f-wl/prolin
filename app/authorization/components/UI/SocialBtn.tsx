interface SocialBtnProps{
  title: string,
  children: React.ReactNode
}
const SocialBtn:React.FC<SocialBtnProps> = ({title, children}) => {
  return (  
    <div 
      className="socialBtn border py-3 flex items-center justify-center gap-3 text-lg font-semibold"
    >
      {children}
      {title}
    </div>
  );
}
 
export default SocialBtn;