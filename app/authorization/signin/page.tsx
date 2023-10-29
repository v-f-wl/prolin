import CForm from "../components/UI/CForm";
import SigninForm from "./components/SigninForm";
import SigninTitle from "./components/SigninTitle";

const page = () => {
  return ( 
    <div className="grid grid-cols-signin">
      <SigninForm/>
      <SigninTitle/>
    </div>
   );
}
 
export default page;