import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface FormBtnProps {
  title: string,
  isLoading: boolean,
  isClick: () => void
}
const FormBtn:React.FC<FormBtnProps> = ({title, isClick, isLoading}) => {
  return ( 
    <div 
      onClick={isClick}
      className="mt-3 flex justify-center bg-slate-800 text-white py-3 rounded-md font-semibold"
    >
      {isLoading ?
      (
        <div className="flex gap-3 items-center">
          Loading <AiOutlineLoading3Quarters className='animate-spin'/>
        </div>
      ) : title}
    </div>
  );
}
 
export default FormBtn;