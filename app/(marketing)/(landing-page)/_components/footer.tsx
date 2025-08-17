import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Map Texture Overlay (you might need to create/find a very subtle pattern) */}
      {/* <div className="absolute inset-0 bg-repeat opacity-5" style={{backgroundImage: 'url(/images/map-texture.png)'}}></div> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Section 1: Brand Info & Location */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link href="/" className="text-white text-2xl font-bold">
            TripSaarthi <span className="text-sm italic text-primary">Your Travel Ally</span>
          </Link>
          <p className="mt-4 text-sm">
            Crafting seamless travel experiences with AI, right from Mumbai.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Serving adventurers worldwide.
          </p>
        </div>

        {/* Section 2: Explore */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors duration-300">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors duration-300">
                Plan Your Adventure
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors duration-300">
                Travel Tales
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Legal & Support */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Legal & Support</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary transition-colors duration-300">
                Help & FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Connect & Newsletter */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            {/* Updated with FaXTwitter and custom hover colors */}
            <Link href="#" className="hover:text-primary transition-colors duration-300">
              <FaXTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-[#0866FF] transition-colors duration-300">
              <FaFacebookF size={24} />
            </Link>
            <Link href="#" className="hover:text-[#FF0069] transition-colors duration-300">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="hover:text-[#11397E] transition-colors duration-300">
              <FaLinkedinIn size={24} />
            </Link>
          </div>
          <div className="mt-4">
            <h5 className="text-white font-semibold text-md mb-2">Subscribe to our Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-gray-300 py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white py-2 px-4 rounded-r-md hover:bg-primary-dark focus:outline-none transition-colors duration-300">
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 text-center relative z-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TripSaarthi. Crafted with <span className="text-red-500">♥</span> in Mumbai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;