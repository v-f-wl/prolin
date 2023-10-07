'use client'
import CTop from '../CTop'
import CLeft from './TopElements/CLeft'
import CCenter from './TopElements/CCenter'
import CRight from './TopElements/CRight'
const TopMain = () => {
  return (  
    <CTop align='center'>
      <CLeft/>
      <CCenter/>
      <CRight/>
    </CTop>
  );
}
 
export default TopMain;