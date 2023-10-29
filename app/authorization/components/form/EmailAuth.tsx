import CInput from "../UI/CInput";
import FormBtn from "../UI/FormBtn";
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";

const EmailAuth = () => {
  return (  
    <div className="flex flex-col gap-4">
      <CInput>
        <FormLabel title="Email"/>
        <FormInput formType="text"/>
      </CInput>

      <CInput>
        <FormLabel title="Password"/>
        <FormInput formType="password"/>
      </CInput>
      <div className="text-red-400 ">
        Something went wrong
      </div>
      <FormBtn title="LogIn"/>
    </div>
  );
}
 
export default EmailAuth;