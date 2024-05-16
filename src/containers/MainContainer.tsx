interface MainContainerProps{
  children: React.ReactNode,
  className?: string
}
const MainContainer:React.FC<MainContainerProps> = ({children, className}) => {
  return ( 
    <div className={`mt-14 ${className}`}>{children}</div>
  );
}
 
export default MainContainer;