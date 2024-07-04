import AdminHeader from "./header";
import GamesDashboard from "./games-dashboard";
import GameResults from "./game-results";

const MainContainer = () => {
  return ( 
    <div className="flex flex-col h-full gap-4">
      <AdminHeader/>
      <div className="bg-white rounded-xl h-full p-6 flex flex-col gap-8">
        <GamesDashboard/>
        <GameResults/>
      </div>
    </div>
  );
}
 
export default MainContainer;