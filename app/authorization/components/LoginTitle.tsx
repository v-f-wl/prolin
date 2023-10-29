import FlexCenter from "@/app/components/UI/FlexCenter";
import MainTitle from "./UI/MainTitle";

const LoginTitle = () => {
  return (  
    <FlexCenter className="flex-col bg-blue-100/30 h-screen gap-6">
      <MainTitle title="Welcome to the Prolin"/>
      <img src="./loginIllustration.svg" alt="#" />
    </FlexCenter>
  );
}
 
export default LoginTitle;