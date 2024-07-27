const TodoItem = ({
  title,
  id
} : {
  title: string,
  id: string
}) => {
  return (  
    <div className="pl-1 pb-2 border-b border-indigo-300">
      {title}
    </div>
  );
}
 
export default TodoItem;