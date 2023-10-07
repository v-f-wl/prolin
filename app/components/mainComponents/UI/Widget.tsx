const Widget = ({children}: {children: React.ReactNode}) => {
  return ( 
    <div className="bg-white dark:bg-neutral-700 p-4 rounded-xl dark:text-white">{children}</div>
  );
}
 
export default Widget;