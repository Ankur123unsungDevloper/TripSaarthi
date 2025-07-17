"use client";

import { Logo } from "@/components/logo";
// import { NavigationMenuListItems } from "./_components/menu";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-Scroll-Top";
import ActionButton from "./_components/action-button";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-[#ffff] fixed top-0 flex items-center justify-between w-full px-1 gap-x-8",
      scrolled && "border-b shadow-2xl"
    )}>
      <Logo />
        {/* <NavigationMenuListItems /> */}
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 relative left-[5px]">
        <ActionButton />
      </div>
    </div>
  );
};

export default Navbar;