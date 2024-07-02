const CLobby = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="w-screen h-screen overflow-hidden bg-lobby-space-gradient">{children}</div>
  );
}
 
export default CLobby;