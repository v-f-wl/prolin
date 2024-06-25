import Header from "./component/header";
import HowItWorks from "./component/how-it-works";
import IntroSection from "./component/intro-section";

export default function Home() {
  return (
    <div className="md:container md:mx-auto relative">
      <Header/>
      <IntroSection/>
      <HowItWorks/>
    </div>
  );
}
