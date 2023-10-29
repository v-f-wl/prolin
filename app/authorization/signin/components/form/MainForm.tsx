import CInput from "@/app/authorization/components/UI/CInput";
import FormBtn from "@/app/authorization/components/UI/FormBtn";
import FormInfo from "@/app/authorization/components/UI/FormInfo";
import FormInput from "@/app/authorization/components/UI/FormInput";
import FormLabel from "@/app/authorization/components/UI/FormLabel";
import Link from "next/link";

const MainForm = () => {
  return ( 
    <div className="flex flex-col gap-3">
      <CInput>
        <FormLabel title="Email"/>
        <FormInfo title="We recommend using a valid email "/>
        <FormInput formType="text"/>
      </CInput>
      <CInput>
        <FormLabel title="First Name"/>
        <FormInput formType="text"/>
      </CInput>
      <CInput>
        <FormLabel title="Last Name"/>
        <FormInput formType="text"/>
      </CInput>
      <CInput>
        <FormLabel title="Password"/>
        <FormInput formType="password"/>
      </CInput>
      <FormBtn title="Create"/>
    </div>
  );
}
 
export default MainForm;