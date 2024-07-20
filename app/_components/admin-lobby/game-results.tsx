import SubTitle from "../UI/subtitle";
import ResultCard from "./game-result-card";

const GameResults = () => {
  return ( 
    <div className="flex flex-col">
      <SubTitle text="Result of last game"/>
      <div className="font-light text-sm text-gray-400">*all results in the history tab</div>
      <div className="mt-4">
        <div className="text-xl">
          Title of the game
        </div>
        <div className="text-gray-500">
          Round 1
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-12">
        <ResultCard title="Max Value" value="6"/>
        <ResultCard title="Min Value" value="1"/>
        <ResultCard title="Average value" value="3"/>
      </div>
    </div>
  );
}
 
export default GameResults;