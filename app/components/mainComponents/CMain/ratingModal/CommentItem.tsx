import RTitle from "./RTitle";

interface CommentItemProps{
  changeValue: (value: string) => void,
  commentValue: string
}
const CommentItem: React.FC<CommentItemProps> = ({
  changeValue,
  commentValue
}) => {
  return (
    <div className="flex flex-col gap-2">
      <RTitle title="Add comment"/>
      <textarea 
        onChange={(e) => changeValue(e.target.value)}
        value={commentValue} placeholder="Write a brief comment about today"
        className="
          w-[510px] 
          h-[120px] rounded-lg
          resize-none 
          p-4 text-xl 
          font-semibold 
          text-green-200 
          outline-none 
          border-none 
        "
      >
      </textarea>
    </div>
  );
}
 
export default CommentItem;