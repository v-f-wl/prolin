import LoginForm from "../../components/signin/LoginForm";
import LoginTitle from "../../components/signin/LoginTitle";

const page = () => {
  return ( 
    <div className="grid grid-cols-login bg-white">
      <LoginTitle/>
      <LoginForm/>
    </div>
  );
}
 
export default page;