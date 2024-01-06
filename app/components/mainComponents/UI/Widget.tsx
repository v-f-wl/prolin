const Widget = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return ( 
    <div className={`${className} bg-white dark:bg-neutral-700 p-4 rounded-xl dark:text-white`}>{children}</div>
  );
}
 
export default Widget;