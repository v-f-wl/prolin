import CTop from '../CTop'
import LeftColum from './CLeft/LeftColum';
import MainColum from './CMain/MainColum';
const CentalMain = () => {
  return ( 
    <CTop align='top'>
      <LeftColum/>
      <MainColum/>
    </CTop>
   );
}
 
export default CentalMain;