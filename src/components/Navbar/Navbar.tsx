"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import Link from "next/link";
import { NavBarLists } from "@/contexts";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useCartStore } from "@/stores/CartStore";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get the cart item count from Zustand store
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="container px-4 md:px-8 relative bg-black text-white">
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
          className={`fixed top-0 right-0 h-full w-2/5 bg-black flex flex-col items-center justify-center gap-6 transition-transform border-l border-[#ffd500] sm:border-none duration-300 z-20 md:static md:flex md:flex-row md:h-auto md:w-auto ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          }`}
        >
          {NavBarLists.map((list) => (
            <li key={list.name} className="flex items-center">
              <Link
                href={list.href}
                className="text-white hover:text-[#ffd500] duration-200 text-lg"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {list.name}
                {list.name === "Cart" && cartCount > 0 && (
                  <span className="ml-2 bg-[#ffd500] text-black px-2 py-1 rounded-full text-sm">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          ))}

          {/* If User Sign in */}
          <SignedOut>
            <SignInButton />
          </SignedOut>

          {/* If User Sign in */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
