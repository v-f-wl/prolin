import ChildrenProps from "@/types/containerType";

const Wrapper:React.FC<ChildrenProps> = ({children}) => {
  return (  
    <div className="bg-foregroundLight dark:bg-foregroundDark text-black dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">{children}</div>
    </div>
  );
}
 
export default Wrapper;