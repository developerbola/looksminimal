"use client";
import Link from "next/link";
import { useLinks } from "@/app/context/LinksProvider";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { links, breadcrumb } = useLinks();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 fixed w-full flex items-center justify-between px-4 md:px-8 lg:px-12 backdrop-blur z-[999]">
      <div className="flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <h2
            className={`text-xl md:text-2xl ${breadcrumb ? "md:opacity-50" : ""}`}
          >
            Looks Minimal {breadcrumb ? "/" : ""}
          </h2>
        </Link>
        {breadcrumb ? (
          <p className="text-xl md:text-2xl truncate max-w-32 md:max-w-full hidden sm:block">
            {breadcrumb}
          </p>
        ) : null}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {links?.map((link) => (
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
        {isMenuOpen ? (
          <Image
            src={"/icons/close.svg"}
            alt="close icon"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={"/icons/menu.svg"}
            alt="menu icon"
            width={40}
            height={40}
          />
        )}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 backdrop-blur-sm shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-950 md:hidden backdrop-blur-md`}
      >
        <div className="flex flex-col p-6 gap-6">
          <button onClick={toggleMenu} className="self-end">
            <Image
              src={"/icons/close.svg"}
              alt="close icon"
              width={30}
              height={30}
            />
          </button>
          {links?.map((link) => (
            <Link
              href={link.href}
              className="cursor-pointer hover:opacity-70 transition-opacity py-2 text-lg"
              key={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
