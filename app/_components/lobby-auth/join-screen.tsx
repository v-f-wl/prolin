import Button from "../authUI/button";
import AuthInput from "../authUI/input";
import SubTitle from "../authUI/sub-title";
import TextSpace from "../authUI/text-space";
import Title from "../authUI/title"

const JoinScreen = ({
  isActive,
  changeScreen
}: {
  isActive: boolean
  changeScreen: () => void
}) => {
  return ( 
    <div 
      className={`
        ${isActive ? 'z-20 opacity-100' : 'z-0 opacity-0'}
        absolute top-0 
        w-full h-full 
        flex 
        transition-opacity duration-500
      `}
    >
      <div 
        className={`
          flex-1 flex flex-col items-center justify-center gap-4
          bg-white
        `}
      >
        <div 
          className={`
            ${isActive ? 'translate-x-0' : 'translate-x-12'}
            flex flex-col gap-6
            transition-transform duration-300
            text-center
          `}
        >
          <SubTitle text="Join to the lobby"/>
          <AuthInput label="Enter name"/>
          <AuthInput label="Enter profession(optional)"/>
          <AuthInput label="Enter lobby ID"/>
          <Button onClick={() => console.log('click')} style="light" label="Join"/>
        </div>
        
      </div>
      <div className="flex-1 flex flex-col gap-3 items-center justify-center text-white">
        <Title text="Welcome to prolin"/>
        <TextSpace text="We're excited to have you here. Please fill out the form to join the lobby and get started. Let's make something great together!"/> 
        <Button onClick={changeScreen} style="color" label="Create lobby"/>
      </div>
    </div>
   );
}
 
export default JoinScreen;