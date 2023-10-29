import LoginForm from "./components/LoginForm";
import LoginTitle from "./components/LoginTitle";

const page = () => {
  return ( 
    <div className="grid grid-cols-login">
      <LoginTitle/>
      <LoginForm/>
    </div>
  );
}
 
export default page;