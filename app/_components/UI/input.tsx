const Input = ({
  placeholderValue
}: {
  placeholderValue?: string
}) => {
  return (
    <input type="text" className="w-full border py-2 px-4 rounded-xl" placeholder={placeholderValue}/>
  );
}

export default Input;
