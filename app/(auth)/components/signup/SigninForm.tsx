import FlexCenter from "@/app/components/UI/FlexCenter";
import MainForm from "./form/MainForm";
import Link from "next/link";
import CForm from "../UI/CForm";
import SubTitle from "../UI/SubTitle";

const SigninForm = () => {
  return (  
    <FlexCenter className="bg-white">
      <CForm>
        <SubTitle title="Create your account"/>
        <div className="text-neutral-500">
          Have an account? <Link href={`/sign-in`} className="text-blue-600 font-semibold">Log in now</Link>
        </div>
        <MainForm/>
      </CForm>
    </FlexCenter>
  );
}
 
export default SigninForm;