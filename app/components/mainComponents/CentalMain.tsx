import CTop from '../CTop'
import LeftColum from './CLeft/LeftColum';
import MainColum from './CMain/MainColum';
import RightColum from './CRight/RightColum';
const CentalMain = () => {
  return ( 
    <CTop align='top'>
      <LeftColum/>
      <MainColum/>
      <RightColum/>
    </CTop>
   );
}
 
export default CentalMain;