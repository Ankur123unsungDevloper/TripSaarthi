import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('/public/backgroundImage/Heading_bg.jpg')`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-4 text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20">
          Discover. Plan. Book. Travel <br />
          The Desi Way, The Smart Way.
        </h1>
        <h3 className="text-base sm:text-xl md:text-xl font-medium">
          TripSaarthi is your intelligent travel workspace — where journeys begin,
          plans come together, and smarter travel happens.
        </h3>

        <div className="flex justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/signin">Plan My Trip</Link>
          </Button>
          <Button variant="ghost" className="hover:underline text-white" asChild>
            <Link href="/contact-sales">
              Request a demo
              <ArrowRight className="h-4 w-4 ml-2" strokeWidth={3} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
