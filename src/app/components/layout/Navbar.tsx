"use client";
import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaBars,
  FaDownload,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const categories = [
  {
    name: "Coffee Machines",
    subcategories: ["Espresso Machines", "Coffee Grinders"],
  },
  {
    name: "Dishwashers",
    subcategories: ["Glass Washers", "Commercial Dishwashers"],
  },
  {
    name: "Refrigeration",
    subcategories: ["Chillers", "Freezers", "Salad Refrigerators"],
  },
  {
    name: "Display Cases",
    subcategories: ["Cake Displays", "Meat Displays", "Visicoolers"],
  },
  {
    name: "Ice Machines",
    subcategories: ["Ice Cube Makers", "Ice Flakers", "Soft Ice Cream"],
  },
  {
    name: "Cooking Equipment",
    subcategories: ["Shawarma Machines", "Waffle & Pancake Bakers"],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  return (
    <>
      <div className="w-full bg-primary text-secondary text-center py-1 font-medium">
        Get Up To 50% OFF Kitchen Items
      </div>
      <ul className="py-2 flex justify-around border-b border-gray-300 text-xs md:text-sm">
        <li className="flex items-center gap-3">
          <LuPhoneCall size={20} className="text-gray-600" /> (+1) 1234-567-890
        </li>
        <li className="flex items-center gap-3">
          <MdOutlineEmail size={20} className="text-gray-600" />
          example@domain.com
        </li>
        <li className="flex items-center gap-3">
          <IoLocationOutline size={20} className="text-gray-600" />
          Dubai
        </li>
      </ul>
      <header className="flex items-center justify-between p-4 bg-white max-w-[96%] mx-auto border-b border-gray-300">
        {/* Logo Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Ecommerce</h1>
          <span className="text-sm text-gray-500">
            The Online Kitchen Store
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full p-2 pl-4 pr-10 text-gray-700   rounded-lg bg-gray-100 focus:ring-2 focus:ring-gray-300"
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>

        <div className="flex gap-6">
          <button className="hidden md:flex cursor-pointer items-center gap-2 px-6 py-2 text-lg font-semibold text-white bg-primary rounded-lg   transition-all">
            <FaDownload className="text-xl" />
            Download Catalog
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </header>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-gray-50 p-3 py-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative mx-4"
            onMouseEnter={() => setDropdownOpen(index)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <button className="font-semibold hover:text-blue-600">
              {category.name}
            </button>
            {dropdownOpen === index && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-10">
                {category.subcategories.map((sub, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 p-4 space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === index ? null : index)
                }
                className="w-full text-left font-semibold"
              >
                {category.name}
              </button>
              {dropdownOpen === index && (
                <div className="ml-4 mt-2 space-y-2">
                  {category.subcategories.map((sub, i) => (
                    <a key={i} href="#" className="block text-gray-600">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

 