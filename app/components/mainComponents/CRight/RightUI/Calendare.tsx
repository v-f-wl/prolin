const Calendare = () => {

  const DateCard = ({num, day, active} : {num: number, day: string, active?: boolean}) => (
    <div className={`${active && 'bg-orange-400 text-white'} border border-neutral-300 dark:border-neutral-600 rounded-md flex flex-col gap-1 items-center justify-center w-[32px] py-1 text-sm font-semibold`}>
      <div className="">{day}</div>
      <div className="">{num}</div>
    </div>
  )
  return ( 
    <div className="flex items-center justify-between gap-1">
      <DateCard num={4} day='Su'/>
      <DateCard num={5} day='Mo'/>
      <DateCard num={6} day='Tu'/>
      <DateCard num={7} day='We' active/>
      <DateCard num={8} day='Th'/>
      <DateCard num={9} day='Fr'/>
      <DateCard num={10} day='Sa'/>
    </div>
  );
}
 
export default Calendare;