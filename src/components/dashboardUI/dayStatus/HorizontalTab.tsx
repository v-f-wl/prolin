'use client'

import { useMemo, useState } from "react";
import StatusTab from "./StatusTab";
import WeekSlider from "./WeekSlider";
import MounthSlider from "./MounthSlider";
import YearSlider from "./YearSlider";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('week')

  const tabTitles = [
    {
      value: 'This week',
      key: 'week'
    },
    {
      value: 'This mounth',
      key: 'mounth'
    },
    {
      value: 'This year',
      key: 'year'
    },
  ]
  const changeTab = (value : string) => {
    setActiveTab(() => value)
  }

  const renderComponent = useMemo(() => {
    switch(activeTab) {
      case 'week':
        return <WeekSlider />;
      case 'mounth':
        return <MounthSlider />;
      case 'year':
        return <YearSlider />;
      default:
        return null;
    }
  }, [activeTab]);


  return ( 
    <div className="flex items-center gap-6 justify-between w-full">
      <div className="flex flex-col gap-3 flex-shrink-0">
        {tabTitles.map(item => (
          <StatusTab title={item.value} key={item.key} onClick={() => changeTab(item.key)} isActive={item.key === activeTab}/>
        ))}
      </div>
      <div className="w-full border-l pl-8 py-4">
        {renderComponent}
      </div>
    </div>
  );
}
 
export default Tabs;