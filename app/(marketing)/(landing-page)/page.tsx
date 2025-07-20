import Heading from "./_components/heading";
import Hero from "./_components/hero";
import Partner from "./_components/partner";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gay-y-[8px]">
        <Heading />
        <Hero />
        <Partner />
      </div>
    </div>
  );
};

export default LandingPage;