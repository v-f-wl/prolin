const FormBtn = ({title} : {title: string}) => {
  return ( 
    <div className="mt-3 flex justify-center bg-slate-800 text-white py-3 rounded-md font-semibold">
      {title}
    </div>
  );
}
 
export default FormBtn;