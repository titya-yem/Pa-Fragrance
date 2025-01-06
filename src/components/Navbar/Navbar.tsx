"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import Link from "next/link";
import { NavBarLists } from "@/contexts";
import { useSession, signOut } from "next-auth/react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="container px-4 md:px-8 relative">
      <nav className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Pa Fragrance Logo official"
          />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <IoMdClose color="#ffd500" size={30} />
          ) : (
            <IoIosMenu color="#ffd500" size={30} />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 right-0 h-full w-1/3 bg-black md:bg-transparent flex flex-col items-center justify-center gap-6 transition-transform border-l border-[#ffd500] duration-300 z-20 md:static md:flex md:flex-row md:h-auto md:w-auto md:gap-8 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {NavBarLists.map((list) => (
            <li key={list.name} className="flex items-center">
              <Link
                href={list.href}
                className="text-white hover:text-[#ffd500] duration-200 text-lg md:text-base"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {list.name}
              </Link>
            </li>
          ))}

          {/* Authentication Status */}
          {!session ? (
            <li>
              <Link
                href="/login"
                className="bg-[#ffd500] text-black p-2 rounded-md hover:bg-transparent hover:text-[#ffd500] hover:border hover:border-[#ffd500] duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => {
                  signOut();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#ffd500] text-black p-2 rounded-md hover:bg-transparent hover:text-[#ffd500] hover:border hover:border-[#ffd500] duration-200"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
