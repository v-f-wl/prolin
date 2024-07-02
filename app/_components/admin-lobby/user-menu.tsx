import IArrow from "@/_assets/icons/IArrow";

const UserMenu = ({
  label,
  userId,
  profession,
  openId,
  openMenu
}: {
  label: string,
  userId: string,
  profession: string,
  openId: string,
  openMenu: (id: string) => void
}) => {
  const isOpen = openId === userId

  return ( 
    <div
      onClick={() => openMenu(userId)}
      className={`
        ${isOpen && 'bg-gray-300/30'}
        max-w-[230px] 
        flex flex-col gap-3
        px-4 py-2 
        rounded-xl
        cursor-pointer hover:bg-gray-300/30 transition duration-300
        group
      `}
    >
      <div className="flex justify-between items-center">
        <div className="">
          {label}
          <div className="text-gray-500">
            {profession}
          </div>
        </div>
        <div  
          className={`
            ${isOpen && 'opacity-100 rotate-180'}
            group-hover:opacity-100
            opacity-0 transition-all duration-300
          `}
        >
          <IArrow size="24"/>
        </div>
      </div>
      <div 
        className={`
          ${isOpen ? 'w-full h-[1px] bg-gray-400/40 visible' : 'absolute w-0 max-h-0 h-0 invisible overflow-hidden'}
        `}
      ></div>
      <div 
        className={`
          ${isOpen ? 'max-h-[300px] h-auto visible' : 'absolute max-h-0 h-0 overflow-hidden invisible'}
          transition-all duration-500
        `}
      >
        <div className="text-red-400">
            Remove
        </div>
      </div>
    </div>
  );
}
 
export default UserMenu;