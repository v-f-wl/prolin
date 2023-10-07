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
      <InfoBtn 
        title='7h 23min' 
        style="blue"
      />
      <InfoBtn 
        title='7h 23min' 
        style="gray"
      />
      <InfoBtn 
        title='7h 23min' 
        style="purple"
      />
    </Widget>
  );
}
 
export default WorkSchedule;