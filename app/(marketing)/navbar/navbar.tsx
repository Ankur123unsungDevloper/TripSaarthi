import { Logo } from "@/components/logo";

const Navbar = () => {
  return (
    <div className="z-50 bg-[#f0f0f0] fixed top-0 flex items-center w-full p-1 gap-x-8">
      <Logo />
    </div>
  );
};

export default Navbar;