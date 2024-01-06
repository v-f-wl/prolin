const CInput = ({children} : {children: React.ReactNode}) => {
  return (  
    <div className="flex flex-col gap-1 text-black">
      {children}
    </div>
  );
}
 
export default CInput;