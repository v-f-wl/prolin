'use client'
import { useRouter } from "next/navigation";
import Button from "../authUI/button";
import AuthInput from "../authUI/input";
import SubTitle from "../authUI/sub-title";
import TextSpace from "../authUI/text-space";
import Title from "../authUI/title";

const CreateLobby = ({
  isActive,
  changeScreen
}: {
  isActive: boolean,
  changeScreen: () => void
}) => {
  const router = useRouter()
  return ( 
    <div 
      className={`
        ${isActive ? 'z-0 opacity-0' : 'z-20 opacity-100'}
        absolute top-0 
        flex 
        w-full h-full 
        transition-opacity duration-500
      `}
    >
      <div className="flex-1 flex flex-col gap-4 items-center justify-center text-white">
        <Title text="Welcome to prolin"/>
        <TextSpace text="Welcome to the creation hub! Please fill out the form to create your lobby and get started. Let's build an amazing experience together!" />
        <Button onClick={changeScreen} style="color" label="Join the lobby"/>
      </div>
      <div 
        className="
          flex-1 flex flex-col gap-4 items-center justify-center 
          bg-white
        "
      >
        <div 
          className={`
            ${isActive ? '-translate-x-12' : 'translate-x-0'}
            flex flex-col gap-6
            transition-transform duration-500
            text-center
          `}
        >
          <SubTitle text="Create the lobby"/>
          <AuthInput label="Enter name"/>
          <AuthInput label="Enter profession(optional)"/>
          <AuthInput label="Enter lobby ID"/>
          <Button onClick={() => router.push('/lobby-session/fsfbdfb')} style="light" label="Create"/>
        </div>
      </div>
    </div>
  );
}
 
export default CreateLobby;