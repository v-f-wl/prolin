interface TodoTextareaProps{
  textValue: string,
  changeValue: (label: 'todoText' | 'todoPriority' | 'todoCategory' , value: string) => void
}
const TodoTextarea: React.FC<TodoTextareaProps> = ({
  textValue,
  changeValue
}) => {
  return ( 
    <textarea 
        placeholder="Write your todo here..." 
        className="w-full h-[120px] resize-none p-4 rounded-lg outline-emerald-400 text-2xl bg-stone-100 dark:bg-neutral-800/30"
        onChange={(event) => changeValue('todoText', event.target.value)}
        value={textValue}
    />
  );
}
 
export default TodoTextarea;