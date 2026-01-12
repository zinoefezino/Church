import Button from "./Button";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full  border-b border-gray-300 bg-white z-10">
      <div className="flex items-center  px-6 py-4 ">
        <div className="flex-1">
          <h1 className="font-bold text-3xl">Church</h1>
        </div>

        {/* Middle links */}
        <div>
          <nav className="hidden md:flex flex-1  ">
            <ul className="flex gap-5">
              <li>About</li>
              <li>Watch</li>
              <li>Ministries</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        {/* right links */}
        <div className="hidden md:flex flex-1 justify-end gap-5 items-center">
          <Button text="Visit" />
        </div>

        <button
          // Toggle menu open/closed on click
          onClick={() => setIsOpen(!isOpen)}
          // Hide on desktop, show on mobile
          className="md:hidden cursor-pointer"
        >
          {/* React Icon */}
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* MOBILE MENU (only shows when isOpen === true) */}
      {isOpen && (
        <div className="md:hidden border border-gray-300 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>About</li>
            <li>Watch</li>
            <li>Ministries</li>
            <li>Contact</li>
          </ul>

          {/* Mobile buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <Button text="Visit Us" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
