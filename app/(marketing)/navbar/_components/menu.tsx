"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Icons
import { FaTrain, FaHotel, FaPlane, FaRegCalendarAlt } from "react-icons/fa";
import { BsPhone, BsLaptop, BsPuzzle } from "react-icons/bs";
import { MdPeople, MdFamilyRestroom, MdBusinessCenter } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GiJourney } from "react-icons/gi";

export function NavigationMenuListItems() {
  return (
    <NavigationMenu className="hidden lg:flex relative items-center justify-center">
      <NavigationMenuList>
        {/* Product */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-6 p-4 md:w-[500px] lg:w-[700px]">
              <FeatureItem
                icon={<FaTrain className="text-blue-500 text-2xl" />}
                title="Train Booking"
                description="Search, compare, and reserve train tickets instantly."
              />
              <FeatureItem
                icon={<FaHotel className="text-green-500 text-2xl" />}
                title="Hotel Booking"
                description="Find and book the best hotels at top rates."
              />
              <FeatureItem
                icon={<FaPlane className="text-red-500 text-2xl" />}
                title="Flight Booking"
                description="Compare and book flights worldwide."
              />
              <FeatureItem
                icon={<FaRegCalendarAlt className="text-purple-500 text-2xl" />}
                title="Itinerary Planner"
                description="Organize your entire trip in one place."
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Download */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Download</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-6 p-4 md:w-[400px] lg:w-[500px]">
              <FeatureItem
                icon={<BsPhone className="text-indigo-500 text-2xl" />}
                title="Mobile App"
                description="Book and manage trips on the go."
              />
              <FeatureItem
                icon={<BsLaptop className="text-pink-500 text-2xl" />}
                title="Desktop App"
                description="Full power for serious travel planning."
              />
              <FeatureItem
                icon={<BsPuzzle className="text-orange-500 text-2xl" />}
                title="Browser Extension"
                description="Save deals directly while browsing."
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-6 p-4 md:w-[400px] lg:w-[500px]">
              <FeatureItem
                icon={<MdPeople className="text-blue-600 text-2xl" />}
                title="For Solo Travelers"
                description="Flexible tools for individual trips."
              />
              <FeatureItem
                icon={<MdFamilyRestroom className="text-green-600 text-2xl" />}
                title="For Families"
                description="Simplify group travel coordination."
              />
              <FeatureItem
                icon={<MdBusinessCenter className="text-yellow-600 text-2xl" />}
                title="For Businesses"
                description="Corporate travel made easy."
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-6 p-4 md:w-[400px] lg:w-[500px]">
              <FeatureItem
                icon={<IoHelpCircleOutline className="text-purple-500 text-2xl" />}
                title="Help Center"
                description="Get quick answers and tips."
              />
              <FeatureItem
                icon={<GiJourney className="text-teal-500 text-2xl" />}
                title="Travel Guides"
                description="Expert advice and inspiration."
              />
              <FeatureItem
                icon={<MdPeople className="text-red-500 text-2xl" />}
                title="Customer Stories"
                description="See how travelers succeed with our app."
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing Link */}
        <NavigationMenuItem>
          <Link href="/pricing"legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Reusable menu item
const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors">
    {icon}
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);
