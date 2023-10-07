
import Widget from "../UI/Widget";
import { WiDayCloudy } from 'react-icons/wi'

const WeatherWidget = () => {
  return ( 
    <Widget>
      <div className="py-2 flex flex-col items-center justify-center gap-4">
        <WiDayCloudy className="text-[100px]"/>
        <div className=''>Clear</div>
        <div className='text-5xl font-bold font-["Open_Sans"]'>+24°</div>
      </div>
    </Widget>
   );
}
 
export default WeatherWidget;