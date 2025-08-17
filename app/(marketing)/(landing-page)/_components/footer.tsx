import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Brand Info */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link href="/" className="text-white text-2xl font-bold">
            TripSaarthi
          </Link>
          <p className="mt-4 text-sm">
            Your personal AI holiday planner. Streamline your travel details into a single, intuitive platform.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Legal */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary transition-colors duration-300">
              <FaXTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-[#0866FF] transition-colors duration-300">
              <FaFacebookF size={24} />
            </Link>
            <Link href="#" className="hover:text-[#FF0069] transition-colors duration-300">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TripSaarthi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;