const MainContainer = ({children, align} : {children: React.ReactNode, align?: string}) => {
  return ( 
    <div className={`mx-auto w-full max-w-[1200px] grid grid-cols-main gap-9 mt-6 ${align == 'top' && 'items-top'} ${align == 'center' && 'items-center'}`}>
      {children}
    </div>
  )
}
 
export default MainContainer;