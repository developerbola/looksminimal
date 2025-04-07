"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className={`h-20 fixed w-full flex items-center justify-between px-12 backdrop-blur`}
    >
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h2 className="text-2xl">Hashnote</h2>
      </div>
      <div className="flex gap-6">
        <Link href="/about" className="cursor-pointer">
          About
        </Link>
        <Link href="/guides" className="cursor-pointer">
          Guides
        </Link>
        <Link
          href="https://github.com/developerbola/hashnote"
          className="cursor-pointer flex items-center"
        >
          <Image
            src={"/icons/github.svg"}
            alt="github icon"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
