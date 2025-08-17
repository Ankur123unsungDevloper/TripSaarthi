import Footer from "./(landing-page)/_components/footer";
import LandingPage from "./(landing-page)/page";
import Navbar from "./navbar/navbar";

const MarketingPage = () => { 
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default MarketingPage;