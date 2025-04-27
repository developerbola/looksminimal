"use client";
import Link from "next/link";
import { useLinks } from "@/app/context/LinksProvider";

const Navbar = () => {
  const { links, breadcrumb } = useLinks();
  return (
    <div
      className={`h-20 fixed w-full flex items-center justify-between px-12 backdrop-blur`}
    >
      <div className="flex items-center gap-2 ">
        <Link href="/" className="cursor-pointer">
          <h2 className={`text-2xl ${breadcrumb ? "opacity-50" : ""}`}>
            Looks Minimal
          </h2>
        </Link>
        {breadcrumb ? (
          <p className="text-2xl">
            {"/"} {breadcrumb}
          </p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex gap-6">
        {links.map((link) => (
          <Link href={link.href} className="cursor-pointer" key={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
