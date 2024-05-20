import SubTitle from "@/components/SubTitle";

const CreateLink = () => {
  return ( 
    <div>
      <div className="flex items-center gap-1">
        <SubTitle text="Add External Link" />
        {/* <span 
          className="flex items-center justify-center cursor-help w-6 h-6 p-1 rounded-2xl border-2 border-lightGreen" 
          title="You can add a link to a webpage or a YouTube video, for example, to complete the task based on this content."
        >
          ?
        </span> */}
      </div>
      <input
        type="text"
        // value={link}
        // onChange={handleLinkChange}
        placeholder="Paste your link here"
        className="w-[50%] mt-2 bg-inherit p-2 border-2 border-neutral-300/20 rounded-lg outline-lightGreen dark:outline-darkGreen"
      />
    </div>
   );
}
 
export default CreateLink;