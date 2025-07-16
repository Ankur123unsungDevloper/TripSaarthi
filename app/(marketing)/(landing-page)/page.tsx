import Heading from "./_components/heading";
import Hero from "./_components/hero";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gay-y-[8px]">
        <Heading />
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;