import LeftMenu from "./components/LeftMenu";
import CentalMain from "./components/mainComponents/CentalMain";
import TopMain from "./components/mainComponents/TopMain";
import CNotification from "./components/notification/CNotification";

export default function Home() {
  return (
    <div className="">
      <LeftMenu/>
      <main className=" relative">
        <TopMain/>
        <CentalMain/>
      </main>
      <CNotification/>
    </div>
  )
}
