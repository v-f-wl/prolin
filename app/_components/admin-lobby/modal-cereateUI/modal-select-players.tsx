import SubTitle from "../../UI/subtitle";

const SelectPlayers = () => {
  return (
    <div className="flex flex-col gap-2">
      <SubTitle text="Select users for game" />
      <div className="">
        All players
      </div>
      <div className="max-h-[190px] overflow-hidden overflow-y-scroll flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2  border-neutral-400 rounded-full"></div>
          <div className="">
            Kim Valentine
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2  border-neutral-400 rounded-full"></div>
          <div className="">
            Anna Valentine
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2  border-neutral-400 rounded-full"></div>
          <div className="">
            Anna Valentine
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPlayers;