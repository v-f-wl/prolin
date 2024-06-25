const IntroSection = () => {
  return ( 
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex w-full justify-between items-center gap-16">
        <div className="flex flex-col gap-8 max-w-[550px]">
          <h1 className="text-[54px] leading-tight">
            Scrum Poker: <br/> Streamline <span className="inline-block px-2 rounded-xl bg-indigo-400 text-white">Your Team's</span> Task Estimation
          </h1>
          <div className="max-w-[600px] font-light">
            Effortlessly estimate your project tasks with our intuitive Scrum Poker app. Collaborate with your team, gain accurate insights, and enhance productivity with seamless integration across all your devices.
          </div>
          <div className="px-20 py-3 border border-indigo-400 rounded-xl self-start">
            Start
          </div>
        </div>
        <div className="max-w-[650px] w-full">
          <img src='/images/landing-main.svg'  alt="team illustration"/>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="">Build with</div>
        <div className="flex items-center gap-16 flex-wrap justify-center">
          <img src="./logos/mongodb.svg" alt="mongodb logo" />
          <img src="./logos/nextjs.svg" alt="next js logo" />
          <img src="./logos/tailwind.svg" alt="tailwind logo" />
        </div>
      </div>

      <div className="mt-12 border border-indigo-400 p-3 rounded-xl">
        Read More
      </div>
    </div>
  );
}

export default IntroSection
 