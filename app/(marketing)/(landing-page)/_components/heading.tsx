import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url('/backgroundImage/Heading_bg.jpg')`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl h-full space-y-4 text-white text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20">
            Discover. Plan. Book. Travel <br />
            The Desi Way, The Smart Way.
          </h1>
          <h3 className="text-base sm:text-xl md:text-xl font-medium">
            TripSaarthi is your intelligent travel workspace — where journeys begin,
            plans come together, and smarter travel happens.
          </h3>
        </div>

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
