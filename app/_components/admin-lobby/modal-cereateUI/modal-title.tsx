import Input from "../../UI/input";
import SubTitle from "../../UI/subtitle";

const ModalCreateTitle = () => {
  return ( 
    <div className="max-w-[60%] w-full flex flex-col gap-4">
        <SubTitle text="Name of the game" />
        <Input placeholderValue='Redesign the User Dashboard'/>
    </div>
  );
}
 
export default ModalCreateTitle;