import AdminHeader from "./header";
import NewGames from "./new-games";

const MainContainer = () => {
  return ( 
    <div className="flex flex-col h-full gap-4">
      <AdminHeader/>
      <div className="bg-white rounded-xl h-full p-6">
        <NewGames/>
      </div>
    </div>
  );
}
 
export default MainContainer;