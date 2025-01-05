"use client";

import Image from "next/image";
import logo from "../../../public/Logo.png";
import Link from "next/link";
import { NavBarLists } from "@/contexts";

const Navbar = () => {
  return (
    <header className="container">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Pa Fragrance Logo official"
          />
        </Link>

        <ul className="flex-container gap-6 md:text-lg">
          {NavBarLists.map((list) => (
            <li key={list.name} className="flex items-center">
              <Link href={list.href}>{list.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
