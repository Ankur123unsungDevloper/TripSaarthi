import { BsCompassFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const Feature = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-10 h-full w-full">
      <div className="flex flex-col items-center justify-center h-30 w-full">
        <h2 className="text-4xl font-bold mb-4">Why to Choose TripSaarthi?</h2>
      </div>
      <div className="flex xl:space-x-6 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[90rem]">
        <div className="xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-120 h-56 shadow-md rounded-xl pt-2 bg-white">
          <div className="px-8">
            <div className="flex items-center justify-center">
              <BsCompassFill />
            </div>
            <div className="font-medium text-sm xl:text-lg mt-1 relative top-6">
              Seamless Itinerary
            </div>
            <div className="flex flex-col text-sm relative top-6">
              Craft your perfect trip with drag-and-drop ease for flights, hotels, and activities.
            </div>
          </div>
        </div>
        <div className="xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-120 h-56 shadow-md rounded-xl pt-2 bg-white">
          <div className="px-8">
            <div className="flex items-center justify-center">
              <SlCalender />
            </div>
            <div className="font-medium text-sm xl:text-lg mt-1 relative top-6">
              Smart Planning
            </div>
            <div className="flex flex-col text-sm relative top-6">
              Effortlessly manage your bookings in one place, with instant updates and notifications.
            </div>
          </div>
        </div>
        <div className="xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-120 h-56 shadow-md rounded-xl pt-2 bg-white">
          <div className="px-8">
            <div className="flex items-center justify-center">icon</div>
            <div className="font-medium text-sm xl:text-lg mt-1 relative top-6">
              Smart Recommendations
            </div>
            <div className="flex flex-col text-sm relative top-6">
              Discover personalized travel suggestions tailored to your preferences.
            </div>
          </div>
        </div>
        <div className="xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-120 h-56 shadow-md rounded-xl pt-2 bg-white">
          <div className="px-8">
            <div className="flex items-center justify-center">icon</div>
            <div className="font-medium text-sm xl:text-lg mt-1 relative top-6">
              Real-time Updates
            </div>
            <div className="flex flex-col text-sm relative top-6">
              Stay informed with live flight statuses, gate changes, and weather alerts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;