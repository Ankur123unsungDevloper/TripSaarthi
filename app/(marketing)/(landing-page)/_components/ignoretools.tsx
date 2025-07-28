import Image from "next/image";

const IgnoreTools = () => {
  return (
    <div className="flex flex-row items-center justify-between py-16">
      <div>
        <Image
          src="/images/ignore-tools.png"
          alt="Ignore Tools"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <div>
        <div>
          <h3>No need to juggle many apps anymore - plan everything in one place.</h3>
          <p>From flight reservations to activities and accommodation, streamline details on your travel plans into a single, intuitive platform. Say goodbye to scattered bookings and hello to seamless journey management.</p>
        </div>
      </div>
    </div>
  );
};

export default IgnoreTools;