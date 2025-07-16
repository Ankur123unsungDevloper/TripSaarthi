import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import Image from "next/image";


const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});


export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 hover:cursor-pointer">
      <Image
        src="/logo.png"
        alt="TripSaarthi Logo"
        width={40}
        height={40}
        className=""
      />
      <p className={cn("font-semibold relative right-[15px]", font.className)}>
        TripSaarthi
      </p>
    </div>
  );
};