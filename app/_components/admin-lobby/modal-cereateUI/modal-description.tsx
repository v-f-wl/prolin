import SubTitle from "../../UI/subtitle";

const ModalDescription = () => {
  return ( 
    <div className="">
      <SubTitle text="Description" />
      <textarea name="" id="" className="w-full p-2 border rounded-xl h-64 resize-none mt-4" placeholder="Revamp the user dashboard by updating
        the layout and adding new features. Improve 
        the user experience by integrating real-time data 
        visualization, enhancing the responsiveness for 
        mobile devices, and incorporating user feedback forms. 
        Ensure the new design aligns with the overall brand aesthetic and increases user engagement."
      ></textarea>
    </div>
  );
}
 
export default ModalDescription;