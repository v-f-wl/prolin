import SubTitle from "../authUI/sub-title";
import GameCard from "./game-card";

const GamesDashboard = () => {
  return ( 
    <div className="flex flex-col gap-4">
      <SubTitle text="New Games"/>
      <div className="flex gap-4">
        <GameCard title="Create new page for client side" isActive={false} round="1" gameId="223ffvs4-34f"/>
        <GameCard title="Remove user button" isActive={true} round="1" gameId="2ffvs4-34f"/>
      </div>
    </div>
  );
}
 
export default GamesDashboard;