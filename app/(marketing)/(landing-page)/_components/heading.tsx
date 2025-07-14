import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20">
        Discover. Plan. Book. Travel <br />
        The Desi Way, The Smart Way.
      </h1>
      <h3 className="text-base sm:text-xl md:text-xl font-medium">
        TripSaarthi is your intelligent travel workspace — where journeys begin, plans come together, and smarter travel happens.
      </h3>
      <div className="w-full flex items-center justify-center">
      </div>
      <Button>
        <Link href="/signin">
          Plan My Trip
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="ml-10 hover:underline"
        asChild
      >
        <Link href="/contact-sales">
          Request a demo
          <ArrowRight className="h-4 w-4 ml-2 hover:underline" strokeWidth={3} />
        </Link>
      </Button>
    </div>
  );
};

export default Heading;