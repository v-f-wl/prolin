const MSchedule = () => {
  const daysOfWeek: string[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
  return ( 
    <div className="flex justify-between gap-5 h-full">
      <div className="pt-8 flex flex-col gap-2 max-w-[98px]">
        {daysOfWeek.map((item) => (
          <div className="capitalize" key={`123__${item}`}>{item}</div>
          ))}
      </div>
      <div className="relative max-w-[500px] w-full h-[200px] overflow-hidden overflow-x-scroll">
        <div className="flex gap-[16px]">
            <div className="capitalize">00:00</div>
            <div className="capitalize">01:00</div>
            <div className="capitalize">02:00</div>
            <div className="capitalize">03:00</div>
            <div className="capitalize">04:00</div>
            <div className="capitalize">05:00</div>
            <div className="capitalize">06:00</div>
            <div className="capitalize">07:00</div>
            <div className="capitalize">08:00</div>
            <div className="capitalize">09:00</div>
            <div className="capitalize">10:00</div>
            <div className="capitalize">11:00</div>
            <div className="capitalize">12:00</div>
            <div className="capitalize">13:00</div>
            <div className="capitalize">14:00</div>
            <div className="capitalize">15:00</div>
            <div className="capitalize">16:00</div>
            <div className="capitalize">17:00</div>
            <div className="capitalize">18:00</div>
            <div className="capitalize">19:00</div>
            <div className="capitalize">20:00</div>
            <div className="capitalize">21:00</div>
            <div className="capitalize">22:00</div>
            <div className="capitalize">23:00</div>
            <div className="capitalize">24:00</div>
        </div>
      </div>
    </div>
  );
}
 
export default MSchedule;