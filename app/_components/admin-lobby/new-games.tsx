import SubTitle from "../authUI/sub-title";
import GameCard from "./game-card";

const NewGames = () => {
  return ( 
    <div className="flex flex-col gap-4">
      <SubTitle text="New Games"/>
      <div className="flex gap-4">
        <GameCard title="New Game" isActive={true} gameId="223ffvs4-34f"/>
      </div>
    </div>
  );
}
 
export default NewGames;