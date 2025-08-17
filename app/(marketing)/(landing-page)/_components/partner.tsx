import Image from "next/image";
import Link from "next/link";

import { PiArrowRight } from "react-icons/pi";

const logos = [
  // Airlines
  { image: "/logo/airindia-logo.svg" },
  { image: "/logo/indigo-logo.svg" },
  { image: "/logo/vistara-logo.svg" },
  { image: "/logo/akasaair-logo.svg" },
  { image: "/logo/airasia-logo.svg" },
  { image: "/logo/spicejet-logo.svg" },

  // Travel Booking Platforms
  { image: "/logo/makemytrip-logo.svg" },
  { image: "/logo/goibibo-logo.svg" },
  { image: "/logo/easemytrip-logo.svg" },
  { image: "/logo/irctc-logo.svg" },

  // Hotel Booking
  { image: "/logo/bookingdotcom-logo.svg" },
  { image: "/logo/airbnb-logo.svg" },
  { image: "/logo/oyorooms-logo.svg" },

  // International/Google
  { image: "/logo/google-travel-logo.svg" },
];

const Partner = () => {
  return ( 
    <div className="pt-16 flex justify-center items-center flex-col mb-20">
      <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
        Our Trusted Partners
      </div>
      <div className="py-4 xl:w-[40%] text-center px-2">
        Trusted by industry leaders and innovators across the globe.
      </div>
      <div>
        <Link
          href="/"
          className="text-sky-500 flex items-center hover:underline hover:cursor-pointer"
        >
          Explore our success stories <PiArrowRight className="ml-3 text-sm" />
        </Link>
      </div>
      {
        <div className="grid grid-cols-3 xl:grid-cols-7 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-245 pt-10 gap-10 text-center mx-auto">
          {logos.map((logo, index) => (
            <div key={index}>
              <Image
                src={logo.image}
                alt=""
                width={2000}
                height={2000}
                className="w-50"
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Partner;