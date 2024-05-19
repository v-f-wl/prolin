import WeekGraphItems from "./WeekGraphItems";

const WeekGraph = () => {

  const steps = [0, 20, 40, 60, 80]

  
  return (
    <div>
      {/* Main Graph Container */}
      <div className="relative px-2 h-[160px] w-full border-b border-black/20 dark:border-white/40">
        
        {/* Y-axis labels */}
        <div className="absolute top-1 -left-6 flex flex-col gap-[9px]">
          {steps.slice().reverse().map(item => (
            <div key={`${item}__num`}>{item}</div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 w-full h-full flex flex-col gap-[31px]">
          {steps.map(item => (
            <div key={`${item}__line`} className="border-t border-black/20 dark:border-white/40"></div>
          ))}
        </div>

        {/* Graph items */}
        <div className="relative z-10 mt-3 grid grid-cols-7 gap-4 h-full items-end">
          <WeekGraphItems workStatus="90" learningStatus="30" taskStatus="40" style={true} />
          <WeekGraphItems workStatus="10" learningStatus="30" taskStatus="40" style={false} />
          <WeekGraphItems workStatus="40" learningStatus="30" taskStatus="40" style={true} />
          <WeekGraphItems workStatus="20" learningStatus="30" taskStatus="40" style={false} />
          <WeekGraphItems workStatus="0" learningStatus="0" taskStatus="0" style={true} />
          <WeekGraphItems workStatus="20" learningStatus="30" taskStatus="40" style={false} />
        </div>
      </div>

      {/* Weekdays labels */}
      <div className="mt-3 grid grid-cols-7 text-center">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
    </div>
  );
};

 
export default WeekGraph;