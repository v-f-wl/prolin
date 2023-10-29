import FlexCenter from "@/app/components/UI/FlexCenter";
import ToggleItem from "./ToggleItem";
import { useEffect, useState } from "react";

const SlideToggle = ({changeValue: changeFunc} : {changeValue: (label: string) => void}) => {
  const [selectedValue, setSelectedValue] = useState('year')

  useEffect(() => {
    changeFunc(selectedValue)
  },[selectedValue])
  const changeValue = (label: string) => {
    setSelectedValue(prev => label)
  }
  return (  
    <FlexCenter className="gap-6">
      <ToggleItem toggleValue={changeValue} title='week' id="week" currrent={selectedValue}/>
      <ToggleItem toggleValue={changeValue} title='mounth' id="mounth" currrent={selectedValue}/>
      <ToggleItem toggleValue={changeValue} title='year' id="year" currrent={selectedValue}/>
    </FlexCenter>
  );
}
 
export default SlideToggle;