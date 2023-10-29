const YGradient = () => {
  return (  
    <div className="grid w-[245px] grid-cols-3 justify-between grid-rows-for-gradient">
      <div className="">Bad</div>
      <div className="text-center">Normal</div>
      <div className="text-end">Good</div>
      <div className="h-[6px] rounded-xl col-span-3 YGradient"></div>
    </div>
  );
}
 
export default YGradient;