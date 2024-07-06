import SwitchOptions from "./switch-options"

const ModalSwitch = ({
  selectedValue,
  onChange
} : {
  selectedValue: string
  onChange: (value: string) => void
}) => {

  const handleChange = (value: string) => {
    onChange(value)
  }

  return ( 
    <div className="inline-flex h-12 p-2 items-center gap-2 bg-gray-100/80 rounded-full">
      <SwitchOptions isActive={selectedValue === 'create'} onClick={handleChange} optionName="create" title="New Game"/>
      <SwitchOptions isActive={selectedValue === 'round'} onClick={handleChange}optionName="round" title="New Round"/>
    </div>
  );
}
 
export default ModalSwitch;