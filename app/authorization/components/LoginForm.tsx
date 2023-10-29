import FlexCenter from "@/app/components/UI/FlexCenter";
import SubTitle from "./UI/SubTitle";
import CForm from "./UI/CForm";
import LineTitle from "./UI/LineTitle";
import SocialAuth from "./form/SocialAuth";
import EmailAuth from "./form/EmailAuth";

const LoginForm = () => {
  return (  
    <FlexCenter className="bg-white">
      <CForm>
        <SubTitle title="Log in to your account"/>
        <SocialAuth/>

        <LineTitle/>

        <EmailAuth/>
      </CForm>
    </FlexCenter>
  );
}
 
export default LoginForm;