'use client'
import { useState } from "react";
import SubTitle from "../UI/subtitle";
import GameCard from "./game-card";

const GamesDashboard = () => {

  const [gamesCollection, setGamesCollection] = useState([])
  return ( 
    <div className="flex flex-col gap-4">
      <SubTitle text="New Games"/>
      <div className="flex gap-4">
        {gamesCollection.length > 0 ? 
        (
          <GameCard title="Remove user button" isActive={true} round="1" gameId="2ffvs4-34f"/>
        ) : (
          <div 
            className="
              w-full 
              flex justify-center items-center
              h-[200px] 
              "
            >
              <div 
                className="
                  cursor-pointer px-3 py-2 bg-neutral-100
                "
              >
                Create new game
              </div>
          </div>

        )}
      </div>
    </div>
  );
}
 
export default GamesDashboard;