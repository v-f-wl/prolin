const WeekGraph = () => {

  const steps = [0, 20, 40, 60, 80]
  return ( 
    <div className="max-w-[600px]">
      <div className="relative px-2 h-[160px] max-w-[600px] w-full border-b border-black/20 dark:border-white/40">
        <div className="absolute top-1 -left-6 flex flex-col gap-[9px]">
          {steps.reverse().map(item => (
            <div key={`${item}__num`} className="">{item}</div>
          ))}
        </div>

        <div className="absolute inset-0 w-full h-full flex flex-col gap-[31px]">
          {steps.map(item => (
            <div key={`${item}__line`} className="border-t border-black/20 dark:border-white/40"></div>
          ))}
        </div>

        <div className="relative z-10 mt-3 grid grid-cols-7 gap-4 h-full items-end">
          <div className="flex justify-center gap-2 items-end bg-blue-100/20 h-full">
            <div className={`w-4 bg-blue-300 h-[100px] rounded-t-sm`}></div>
            <div className="w-4 bg-green-400 h-[110px] rounded-t-sm"></div>
            <div className="w-4 bg-red-400 h-[50px] rounded-t-sm"></div>
          </div>
          <div className="flex justify-center gap-2 items-end">
            <div className="w-4 bg-green-100 h-[80px]"></div>
            <div className="w-4 bg-green-100 h-[10px]"></div>
            <div className="w-4 bg-green-100 h-[160px]"></div>
          </div>
          <div className="flex justify-center gap-2 items-end bg-blue-100/20 h-full">
            <div className={`w-4 bg-blue-300 h-[90px]`}></div>
            <div className="w-4 bg-green-400 h-[130px]"></div>
            <div className="w-4 bg-red-400 h-[10px]"></div>
          </div>
          <div className="flex justify-center gap-2 items-end">
            <div className="w-4 bg-green-100 h-[80px]"></div>
            <div className="w-4 bg-green-100 h-[10px]"></div>
            <div className="w-4 bg-green-100 h-[160px]"></div>
          </div>
          <div className="flex justify-center gap-2 items-end bg-blue-100/20 h-full">
            <div className={`w-4 bg-blue-300 h-[90px]`}></div>
            <div className="w-4 bg-green-400 h-[130px]"></div>
            <div className="w-4 bg-red-400 h-[10px]"></div>
          </div><div className="flex justify-center gap-2 items-end">
            <div className="w-4 bg-green-100 h-[80px]"></div>
            <div className="w-4 bg-green-100 h-[10px]"></div>
            <div className="w-4 bg-green-100 h-[160px]"></div>
          </div>
          <div className="flex justify-center gap-2 items-end bg-blue-100/20 h-full">
            <div className={`w-4 bg-blue-300 h-[90px]`}></div>
            <div className="w-4 bg-green-400 h-[130px]"></div>
            <div className="w-4 bg-red-400 h-[10px]"></div>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 text-center">
        <div className="">Mon</div>
        <div className="">Tue</div>
        <div className="">Wed</div>
        <div className="">Thu</div>
        <div className="">Fri</div>
        <div className="">Sat</div>
        <div className="">Sun</div>
      </div>


    </div>
   );
}
 
export default WeekGraph;