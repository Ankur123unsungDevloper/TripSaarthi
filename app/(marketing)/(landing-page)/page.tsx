import Feature from "./_components/feature";
import Heading from "./_components/heading";
import Hero from "./_components/hero";
import Heroine from "./_components/heroine";
import IgnoreTools from "./_components/ignoretools";
import Partner from "./_components/partner";
import Services from "./_components/services";
import Testimonial from "./_components/testimonal";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gay-y-[8px]">
        <Heading />
        <Hero />
        <Partner />
        <IgnoreTools />
        <Feature />
        <Services />
        <Testimonial />
        <Heroine />
      </div>
    </div>
  );
};

export default LandingPage;