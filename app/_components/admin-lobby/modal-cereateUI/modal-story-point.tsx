import Select from "../../UI/select";
import SubTitle from "../../UI/subtitle";

const options = [
  {
    label: 'Simple, Agile-friendly points (1, 2, 3, 5, 8)',
    value:''
  },
  {
    label: 'Visual size estimations (XS, S, M, L, XL)',
    value:''
  },
  {
    label: 'Common Agile values (0, 1, 2, 3, 5, 8, 13)',
    value:''
  },
  {
    label: 'Straightforward numbers (0, 1, 2, 3, 4, 5)',
    value:''
  },
]
const ModalStoryPoint = () => {

  return ( 
    <div className="flex flex-col gap-2 min-h-[240px]">
      <SubTitle text="Story point"/>
      <Select options={options}/>
    </div>
   );
}
 
export default ModalStoryPoint;