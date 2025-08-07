// import Image from "next/image";

const IgnoreTools = () => {
  return (
    <div className="flex flex-row items-center justify-between py-16 px-6 w-full">
      <div className="flex flex-col items-center justify-center h-100 w-450">
        {/* <Image
          src="/backgroundImage/Heading_bg.jpg"
          alt="Ignore Tools"
          width={1000}
          height={300}
          className="mx-auto w-2000"
        /> */}
      </div>
      <div className="flex flex-col items-start justify-center w-full p-4">
        <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">No need to juggle many apps anymore - plan everything in one place.</h3>
        <p className="text-base sm:text-xl md:text-xl font-medium">From flight reservations to activities and accommodation, streamline details on your travel plans into a single, intuitive platform. Say goodbye to scattered bookings and hello to seamless journey management.</p>
      </div>
    </div>
  );
};

export default IgnoreTools;