const GameCard = ({
  title,
  gameId,
  isActive
}:{
  title: string,
  gameId: string,
  isActive: boolean
}) => {
  return ( 
    <div className="w-[200px] h-[250px] p-4 rounded-xl bg-gray-200/30">
      {title}
    </div>
  );
}
 
export default GameCard;