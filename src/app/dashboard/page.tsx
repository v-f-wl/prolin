
import VerticalTabs from "@/components/dashboardUI/VerticalTabs";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import MainContainer from "@/containers/MainContainer";

export default function Page() {
  return (
    <div className="">
      <Header/>
      <MainContainer className="flex flex-col gap-7">
        <PageTitle title={'title'}/>
        <VerticalTabs/>
      </MainContainer>
    </div>
  );
}
