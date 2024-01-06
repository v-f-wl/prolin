const FormLabel = ({title} : {title: string}) => {
  return ( 
    <div className="text-lg font-semibold text-neutral-600">
      {title}
    </div>
  );
}
 
export default FormLabel;