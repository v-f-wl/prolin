const GridContainer = ({
  children
} : {
  children: React.ReactNode
}) => {
  return ( 
    <div className="grid grid-cols-2 gap-4 mt-8">
      {children}
    </div>
  );
}
 
export default GridContainer;