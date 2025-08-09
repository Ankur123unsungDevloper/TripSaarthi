import { Button } from "@/components/ui/button";
import Link from "next/link";

const Heroine = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-300 w-full">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Next Adventure?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          From dream getaways to seamless travel plans, we’ll make your next journey unforgettable. Let’s start your adventure today.
        </p>
      </div>
      <Button
        size="lg"
        className="bg-[#5B2C6F] text-white text-2xl hover:bg-[#4A235A] transition-colors w-80 rounded-3xl p-2"
      >
        <Link href="/signin">
          Start Planning Today
        </Link>
      </Button>
    </div>
  );
};

export default Heroine;