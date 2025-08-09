import { BsCompassFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaLightbulb, FaSyncAlt } from "react-icons/fa";

const featuresData = [
  {
    icon: <BsCompassFill size={32} className="text-primary" />,
    title: "Seamless Itinerary",
    description:
      "Craft your perfect trip with drag-and-drop ease for flights, hotels, and activities.",
  },
  {
    icon: <SlCalender size={32} className="text-primary" />,
    title: "Smart Planning",
    description:
      "Effortlessly manage your bookings in one place, with instant updates and notifications.",
  },
  {
    icon: <FaLightbulb size={32} className="text-primary" />,
    title: "Smart Recommendations",
    description:
      "Discover personalized travel suggestions tailored to your preferences.",
  },
  {
    icon: <FaSyncAlt size={32} className="text-primary" />,
    title: "Real-time Updates",
    description:
      "Stay informed with live flight statuses, gate changes, and weather alerts.",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col items-center text-center my-16 px-4">
      <h2 className="text-4xl font-bold mb-10">Why Choose TripSaarthi?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
