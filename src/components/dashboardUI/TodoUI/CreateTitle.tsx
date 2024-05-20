import SubTitle from "@/components/SubTitle";

const CreateTitle = () => {
  return ( 
    <div className="">
      <SubTitle text="Enter Your Task" />
        <textarea  

          // value={task}
          // onChange={handleTaskChange}
          placeholder="What needs to be done?"
          className="
            h-24 w-full 
            p-3 mt-2
            text-xl
            bg-inherit 
            border-2 border-lightGreen/10 dark:border-darkGreen/10
            resize-none
            rounded-lg 
            outline-lightGreen dark:outline-darkGreen
          "
        />
    </div>
  );
}
 
export default CreateTitle;