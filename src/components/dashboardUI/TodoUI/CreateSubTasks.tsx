import EditIcon from "@/assets/icons/EditIcon";
import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";


const CreateSubTasks = () => {
  return (  
    <div className="">
      <SubTitle text="Add Subtasks" />
      <div className="grid grid-cols-4 gap-4 items-center">
        <input 
          placeholder="Add a step to complete your task"
          type="text" 
          className="col-span-3 mt-2 bg-inherit p-2 border-2 border-neutral-300/20 rounded-lg outline-lightGreen dark:outline-darkGreen"
        />
        <Button className='col-span-1' value="Add" onClick={() => {}} style="outline"/>
      </div>
    </div>
  );
}
 
export default CreateSubTasks;