const CForm = ({children} : {children: React.ReactNode}) => {
  return ( 
    <div className="max-w-[350px] w-full flex flex-col gap-8">
      {children}
    </div>
  );
}
 
export default CForm;