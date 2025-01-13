import React from 'react';
import Link from 'next/link';
import { Home, Menu, Search, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Menu className="w-6 h-6" />
          <Link href="/" className="text-xl font-semibold" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Aryaman Mishra
          </Link>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 rounded-lg py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Star className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Home className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

