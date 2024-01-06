
interface ButtonsProps{
  clearValue: () => void
}
const Buttons: React.FC<ButtonsProps> = ({clearValue}) => {
  return ( 
    <div className="flex gap-4 items-center">
      <div className="py-2 px-4 rounded-lg bg-teal-600 border-teal-600 dark:bg-teal-800 dark:border-teal-8 cursor-pointer">Add Raiting</div>
      <div
        onClick={clearValue}
        className="py-2 px-4 rounded-lg bg-gray-600 border-gray-600 dark:bg-gray-800 dark:border-gray-800 cursor-pointer"
      >
        Clear All
      </div>
    </div>
  );
}
 
export default Buttons;