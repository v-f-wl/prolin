import { useState } from "react";

interface RangeItemProps{
  title: string
}
const RangeItem: React.FC<RangeItemProps> = ({
  title
}) => {

  const [valueRange, setValutRange] = useState('0')

  const changeRangeValue = (value: string) => {
    setValutRange(prev => value)
  }
  return ( 
    <div className="">
      <div className="font-light">{title}</div>
      <input 
        type="range" className="max-w-[250px] w-full"
        onChange={e => changeRangeValue(e.target.value)}
        value={valueRange}
      />
      <div className="">{valueRange}</div>
    </div>
  );
}
 
export default RangeItem;