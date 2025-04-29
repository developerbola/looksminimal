import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center justify-center h-screen gap-12">
      <div className="flex gap-4">
        <Link href={"/hashnote"}>
          <Image
            src={"/favicons/hashnote.svg"}
            alt="hashnote app icon"
            height={100}
            width={100}
          />
        </Link>
        <Link href="/player">
          <Image
            src={"/favicons/player.svg"}
            alt="player app icon"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-[#adadad] bg-clip-text text-transparent">
          Discover Simple & Beautiful Apps
        </h1>
        <p className="text-base text-[#adadad] md:text-lg lg:text-xl mb-8">
          Clean, focused tools made for minimalism lovers.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
