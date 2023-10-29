import FlexBetween from "@/app/components/UI/FlexBetween";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Loading from "./UI/Loading";

const WInfo = () => {
  return ( 
    <FlexBetween className=" text-sm font-medium">
      <Loading/>
      <div>25.03.2023- 01.04.2023</div>
      <div className="flex gap-5">
        <FlexBetween className="gap-2 text-red-600 dark:text-red-400">
          <div className="h-4 w-4  rounded bg-red-600 dark:bg-red-400"></div>
          <div className="">Mood Rating</div>
        </FlexBetween>
        <FlexBetween className="gap-2 text-lime-500 dark:text-lime-300">
          <div className="h-4 w-4 rounded bg-lime-500 dark:bg-lime-300"></div>
          <div className="">Mood Rating</div>
        </FlexBetween>
        <FlexBetween className="gap-2 text-indigo-500 dark:text-indigo-300">
          <div className="h-4 w-4 rounded bg-indigo-500 dark:bg-indigo-300"></div>
          <div className="">Mood Rating</div>
        </FlexBetween>
      </div>
    </FlexBetween>
  );
}
 
export default WInfo;