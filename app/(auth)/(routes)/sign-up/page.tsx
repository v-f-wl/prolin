import SigninForm from "../../components/signup/SigninForm";
import SigninTitle from "../../components/signup/SigninTitle";

const page = () => {
  return ( 
    <div className="grid grid-cols-signup bg-white">
      <SigninForm/>
      <SigninTitle/>
    </div>
  );
}
 
export default page;