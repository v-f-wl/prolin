import Link from "next/link";
import SocialBtn from "../../UI/SocialBtn";
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'

const SocialAuth = () => {
  return (  
    <div className="flex flex-col gap-5">
      <div className="text-neutral-500">
        Don't have an account?  <Link href={`/sign-up`} className="text-blue-600 font-semibold">Sign Up</Link>
      </div>
      <div className="flex flex-col gap-2">
        <SocialBtn title="Google">
          <FcGoogle size={26}/>
        </SocialBtn>
        <SocialBtn title="GitHub">
          <BsGithub size={26}/>
        </SocialBtn>
      </div>
    </div>
  );
}
 
export default SocialAuth;