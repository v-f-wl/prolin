import MainContainer from "@/app/_components/admin-lobby/main-side";
import ModalCreate from "@/app/_components/admin-lobby/modal-create-game";
import SideBar from "@/app/_components/admin-lobby/sidebar";

const AdminPage = () => {
  return ( 
    <div className="md:container h-full md:mx-auto grid grid-cols-main-lobby gap-9 py-8">
      <SideBar/>
      <MainContainer/>
      <ModalCreate/>
    </div>
   );
}
 
export default AdminPage;