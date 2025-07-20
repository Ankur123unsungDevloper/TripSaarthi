/* eslint-disable @next/next/no-img-element */
import {
  BsArrowLeftSquare,
  BsArrowRightSquare
} from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col h-200 relative bg-[#000] text-white w-full">
      <div className="flex flex-row gap-0 items-center justify-between px-20 w-full h-40">
        <div className="flex flex-col items-start justify-center gap-2 h-30 w-120">
          <h2 className="text-5xl">Upcoming departures</h2>
        </div>
        <div className="flex flex-row w-20 h-20 items-center justify-center gap-2 relative right-10">
          <BsArrowLeftSquare className="h-10 w-10 hover:cursor-pointer hover:h-12 hover:w-12 hover:text-[#4A235A] transition duration-500" />
          <BsArrowRightSquare className="h-10 w-10 hover:cursor-pointer hover:h-12 hover:w-12 hover:text-[#4A235A] transition duration-500" />
        </div>
      </div>
      {/* Cards */}
      <div className="relative w-[1000px] mt-[150px] mx-auto h-full grid grid-cols-3 gap-[40px] bottom-30 text-[#000]">
        <div className="relative hover:bg-[linear-gradient(0deg,_#c21833,_transparent)] h-120 overflow-hidden hover:opacity-[0.5] transition duration-500">
          <div className="absolute top-0 left-0 w-full h-full transition duration-500">
            <img src="/places/jagannath-temple.jpg" alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="absolute w-full h-[60%] -bottom-[100%] hover:bottom-0 p-[20px] text-center">
            <h3 className="mb-2.5 p-0 text-[#fff]">Mu Cang Chai – A comprehensive travel guide</h3>
          </div>
        </div>
        <div className="relative bg-[#fff] h-120">
          <div className="absolute top-0 left-0 w-full h-full transition duration-500">
            <img src="/places/jagannath-temple.jpg" alt="img" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3>Mu Cang Chai – A comprehensive travel guide</h3>
          </div>
        </div>
        <div className="relative bg-[#fff] h-120">
          <div className="absolute top-0 left-0 w-full h-full transition duration-500">
            <img src="/places/jagannath-temple.jpg" alt="img" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3>Mu Cang Chai – A comprehensive travel guide</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;