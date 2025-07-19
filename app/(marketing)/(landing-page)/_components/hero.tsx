import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-300 relative bg-[#fff] w-full">
      <div>
        <div>
          <h3>Best Offers</h3>
        </div>
        <div>
          <BsFillArrowLeftSquareFill />
          <BsFillArrowRightSquareFill />
        </div>
      </div>
      <div className="relative w-[1000px] mt-[150px] mx-auto h-120 grid grid-cols-3 gap-[40px]">
        <div className="relative bg-[#000] overflow-hidden">
          <div>img</div>
          <div>content</div>
        </div>
        <div className="relative bg-[#000] overflow-hidden">card</div>
        <div className="relative bg-[#000] overflow-hidden">card</div>
      </div>
    </div>
  );
};

export default Hero;