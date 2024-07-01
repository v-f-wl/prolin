import Header from "./_components/header";
import HowItWorks from "./_components/how-it-works";
import IntroSection from "./_components/intro-section";

export default function Home() {
  return (
    <div className="md:container md:mx-auto relative">
      <Header/>
      <IntroSection/>
      <HowItWorks/>
    </div>
  );
}
