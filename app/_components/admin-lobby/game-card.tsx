const GameCard = ({
  title,
  gameId,
  round,
  isActive,
  startGame
}:{
  title: string,
  gameId: string,
  round?: string,
  isActive: boolean,
  startGame?: () => void
}) => {
  return ( 
    <div 
      className={`
        ${isActive ? 'bg-green-300/20' : 'bg-gray-200/30'}
        w-[200px] h-[200px] p-4 rounded-xl  flex flex-col justify-between
      `}
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-lg h-14 overflow-hidden">{title}</h3>
        <div className="text-gray-600">
          Round {round}
        </div>
      </div>
      <div className="flex items-center gap-8">
        {/* TODO:  sreate button component*/}
        <div className="cursor-pointer">
          Start
        </div>

        {/* TODO:  sreate button component*/}
        <div className="cursor-pointer">
          Edit
        </div>
      </div>
    </div>
  );
}
 
export default GameCard;