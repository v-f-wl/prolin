import SwitchOption from "./switch-option"

const ModalSwitch = ({
  selectedValue,
  onChange,
} : {
  selectedValue: string
  onChange: (value: string) => void
}) => {

  const handleChange = (value: string) => {
    onChange(value)
  }

  return ( 
    <div className="inline-flex h-12 p-2 items-center gap-2 bg-gray-100/80 rounded-full">
      <SwitchOption isActive={selectedValue === 'create'} onClick={handleChange} optionName="create" title="New Game"/>
      <SwitchOption isActive={selectedValue === 'round'} onClick={handleChange}optionName="round" title="New Round"/>
    </div>
  );
}
 
export default ModalSwitch;