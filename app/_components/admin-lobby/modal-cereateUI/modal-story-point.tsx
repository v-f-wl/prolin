import Select from "../../UI/select";
import SubTitle from "../../UI/subtitle";

const options = [
  {
    label: '',
    value:''
  },
  {
    label: '',
    value:''
  },
  {
    label: '',
    value:''
  },
]
const ModalStoryPoint = () => {

  return ( 
    <div className="flex flex-col gap-2">
      <SubTitle text="Story point"/>
      <Select options={options}/>
    </div>
   );
}
 
export default ModalStoryPoint;