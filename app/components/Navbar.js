'use client';

import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdCreate } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="bg-customBlack p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h2 className="text-white font-dmSerifText text-3xl font-bold logo">Blogify</h2>
        </Link>
        <div className="flex space-x-4">
          <Link href="/write">
            <h6 className="text-white flex items-center hover:text-gray-400">
              <MdCreate className="mr-2" size={24} /> Write
            </h6>
          </Link>
          <Link href="/profile">
            <h6 className="text-white flex items-center hover:text-gray-400">
              <FaUserCircle className="mr-2" size={24} /> Profile
            </h6>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
