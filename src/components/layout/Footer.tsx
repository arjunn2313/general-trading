 
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

 

export default function Footer() {
  return (
    <footer className={`bg-gray-900 text-gray-300 p-10  `}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
              Ecommerce
          </h2>
          <p className="mb-4">
              General Trading is a leading supplier of high-quality
            products across various industries, ensuring seamless global trade
            and supply chain solutions. We specialize in sourcing, distribution,
            and logistics for businesses worldwide.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Our Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Global Trade Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Import & Export
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Wholesale Distribution
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Logistics & Supply Chain
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Retail & B2B Sourcing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                Product Procurement
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="mb-4">
            Subscribe to receive the latest updates on global trade trends, new
            product arrivals, and exclusive business insights.
          </p>
          {/* Newsletter Form */}
          {/* <form className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form> */}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Trusto General Trading. All rights
          reserved. Empowering global trade and logistics.
        </p>
      </div>
    </footer>
  );
}
