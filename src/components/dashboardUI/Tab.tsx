interface TabProps{
  title: string,
  isActive: boolean,
  onClick: () => void
}
const Tab: React.FC<TabProps> = ({
  title,
  isActive,
  onClick
}) => {
  return ( 
    <div 
      onClick={onClick}
      className={`py-1 px-2 rounded-xl ${isActive ? 'bg-foregroundLight dark:bg-foregroundDark' : ''} cursor-pointer transition hover:bg-foregroundLight/60 hover:dark:bg-foregroundDark/60`}
    >
      {title}
    </div>
  );
}
 
export default Tab;