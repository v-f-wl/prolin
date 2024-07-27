import MainContainer from "@/app/_components/admin-lobby/main-side";
import Logo from "@/app/_components/lobbyUI/logo";
import UserHeader from "@/app/_components/user-lobby/user-header";

const UserPage = () => {
  return ( 
    <div className="md:container h-full md:mx-auto py-8">
      <UserHeader/>
      <div className="mt-9 h-full md:mx-auto grid grid-cols-user-lobby gap-6">
        <div className="h-1/2 bg-white rounded-xl py-8"></div>
        <div className="flex flex-col gap-6">
          <div className="h-40 bg-white rounded-xl flex flex-col gap-2 items-center justify-center">
            <div className="text-2xl">
              Kim Valentin
            </div>
            <div className="text-neutral-500">Designer</div>
          </div>
          <div 
            className="
              h-10 bg-green-300/10 
              cursor-pointer
              flex items-center justify-center 
              border-2 border-green-400 rounded-xl
            "
          >
            Start game
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default UserPage;