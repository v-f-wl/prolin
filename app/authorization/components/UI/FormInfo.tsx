import { GrCircleInformation } from 'react-icons/gr'
const FormInfo = ({title} : {title: string}) => {
  return (  
    <div className="flex items-center gap-2 text-neutral-500">
      <GrCircleInformation/> {title}
    </div>
  );
}
 
export default FormInfo;