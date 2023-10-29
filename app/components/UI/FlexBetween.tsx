const FlexBetween = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return ( 
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}
 
export default FlexBetween;