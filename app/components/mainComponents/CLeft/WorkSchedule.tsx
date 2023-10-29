import InfoBtn from "../../UI/InfoBtn";
import Widget from "../UI/Widget";

const WorkSchedule = () => {
  return ( 
    <Widget>
      <div 
        className={`
          font-medium text-lg mb-4
        `}
      >
        Before the start of the workday:
      </div>
      <InfoBtn 
        title='7h 23min' 
        style="green"
      />
    </Widget>
  );
}
 
export default WorkSchedule;