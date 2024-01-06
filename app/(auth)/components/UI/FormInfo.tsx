import { GrCircleInformation } from 'react-icons/gr'
const FormInfo = ({title} : {title: string}) => {
  return (  
    <div className="flex items-center gap-2  text-black">
      <GrCircleInformation/> {title}
    </div>
  );
}
 
export default FormInfo;