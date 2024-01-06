'use client'
import { useAppSelector } from '@/app/redux/store';
import { BsStars } from 'react-icons/bs'
const ProBtn = () => {
  const isLoaded = useAppSelector((store) => store.Loading.value)

  if(!isLoaded) return
  return (  
    <div className="proGradient py-2 text-white flex items-center justify-center gap-2"><BsStars size={24}/> Pro Vesion</div>
  );
}
 
export default ProBtn;