"use client";
import Link from "next/link";
import { useLinks } from "@/app/context/LinksProvider";
import { useState } from "react";

const Navbar = () => {
  const { links, breadcrumb } = useLinks();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 fixed w-full flex items-center justify-between px-4 md:px-8 lg:px-12 backdrop-blur z-50">
      <div className="flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <h2
            className={`text-xl md:text-2xl ${breadcrumb ? "opacity-50" : ""}`}
          >
            Looks Minimal
          </h2>
        </Link>
        {breadcrumb ? (
          <p className="text-xl md:text-2xl truncate max-w-32 md:max-w-full hidden sm:block">
            {"/"} {breadcrumb}
          </p>
        ) : null}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            href={link.href}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            key={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden">
        {isMenuOpen ? "X" : "|||"}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm md:hidden py-4 px-4 flex flex-col gap-4 shadow-md">
          {links.map((link) => (
            <Link
              href={link.href}
              className="cursor-pointer hover:opacity-70 transition-opacity py-2 text-center"
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
