import AuthSwitch from "../_components/lobby-auth/auth-switch";

export default function Home(){
  return ( 
    <div className="h-screen w-full bg-lobby-gradient flex items-center justify-center">
      <AuthSwitch/>
    </div>
  );
}
 