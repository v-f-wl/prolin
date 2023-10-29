import FlexCenter from "@/app/components/UI/FlexCenter";
import CForm from "../../components/UI/CForm";
import SubTitle from "../../components/UI/SubTitle";
import MainForm from "./form/MainForm";
import Link from "next/link";

const SigninForm = () => {
  return (  
    <FlexCenter>
      <CForm>
        <SubTitle title="Create your account"/>
        <div className="text-neutral-500">
          Have an account? <Link href={`/authorization`} className="text-blue-600 font-semibold">Log in now</Link>
        </div>
        <MainForm/>
      </CForm>
    </FlexCenter>
  );
}
 
export default SigninForm;