import { Button } from "@/components/ui/button";
import Image from "next/image";

const servicesData = [
  {
    title: "Flight/Train Bookings",
    description:
      "Find and book the best flights tailored to your schedule and budget.",
    image: "/services/flight.jpg",
  },
  {
    title: "Hotel Reservations",
    description:
      "Discover and reserve top-rated hotels at competitive prices.",
    image: "/services/hotel.jpg",
  },
  {
    title: "Activity Planning",
    description:
      "Organize and schedule activities to make the most of your trip.",
    image: "/services/trip.jpg",
  },
  {
    title: "Car Rentals",
    description:
      "Rent vehicles with ease for convenient travel during your stay.",
    image: "/services/car.jpg",
  },
  {
    title: "Tourist Guides",
    description:
      "Connect with knowledgeable guides to enhance your travel experience.",
    image: "/services/tourist.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center text-center my-16 px-4">
      <h2 className="text-4xl font-bold mb-10">
        Our Comprehensive Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="object-cover h-40 w-full"
            />
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="mt-5 w-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
