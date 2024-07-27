
const SelectItem = ({
  value,
  label,
  changeOption
} : {
  value: string,
  label: string,
  changeOption: (label: string) => void
}) => {
  return ( 
    <div 
      onClick={() => changeOption(label)}
      className="cursor-pointer">
      {label}
    </div>
  );
}
 
export default SelectItem;