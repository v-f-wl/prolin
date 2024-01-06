import RTitle from "./RTitle";


interface SelectItemProps{
  title: string,
  label: string,
  valueOfRating: number,
  changeValue: (label: string, value: string) => void
}
const SelectItem:React.FC<SelectItemProps> = ({
  title,
  label,
  valueOfRating,
  changeValue
}) => {
  return (
    <div className="flex flex-col gap-2">
      <RTitle title={title} />
      <div className="flex gap-2">
        <input
          onChange={(event) => changeValue(label, event.target.value)}
          className="w-[320px]"
          type="range"
          min="0"
          max="100"
          value={valueOfRating}
        />
        <div className="">{valueOfRating}</div>
      </div>
    </div>
  );
}

export default SelectItem;