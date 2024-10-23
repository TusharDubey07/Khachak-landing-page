import React, { useState } from 'react';
import { ChevronDownIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isOfferingsOpen, setOfferingsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#7D7D7D] p-4 w-full fixed top-0 left-0 z-50" style={{backgroundColor: '#1C1C1C'}}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <div className="text-white text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Lora, serif' }}>Khachak</div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 absolute md:relative top-full left-0 w-full md:w-auto bg-[#1C1C1C] md:bg-transparent p-4 md:p-0`}>
          <a href="/" className="block md:inline-block text-white hover:text-gray-300 mb-2 md:mb-0" style={{ fontFamily: 'Lora, serif' }}>Home</a>

          {/* Features Dropdown */}
          <div className="relative mb-2 md:mb-0">
            <button
              onClick={() => setFeaturesOpen(!isFeaturesOpen)}
              className="text-white hover:text-gray-300 focus:outline-none flex items-center w-full md:w-auto"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Features <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {isFeaturesOpen && (
              <ul className="bg-white text-black mt-2 py-2 shadow-lg rounded">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Feature 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Feature 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Feature 3</a></li>
              </ul>
            )}
          </div>

          {/* Our Offerings Dropdown */}
          <div className="relative mb-2 md:mb-0">
            <button
              onClick={() => setOfferingsOpen(!isOfferingsOpen)}
              className="text-white hover:text-gray-300 focus:outline-none flex items-center w-full md:w-auto" 
              style={{ fontFamily: 'Lora, serif' }}
            >
              Our Offerings <ChevronDownIcon className="ml-1 h-5 w-5" />
            </button>
            {isOfferingsOpen && (
              <ul className="bg-white text-black mt-2 py-2 shadow-lg rounded">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Offering 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Offering 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Offering 3</a></li>
              </ul>
            )}
          </div>

          <a href="#" className="block md:inline-block text-white hover:text-gray-300" style={{ fontFamily: 'Lora, serif' }}>About Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;