import PlayerDownloadButton from "@/components/PlayerDownloadButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LooksMinimal | Player",
  icons: "/favicons/player.svg",
};

const Player = () => {
  return (
    <div className="pt-24">
      <PlayerHero />
    </div>
  );
};

export default Player;

const PlayerHero = () => {
  return (
    <section className="w-full h-screen py-24 px-6 flex flex-col items-center text-center bg-black text-white">
      <video
        src="/preview/player-preview.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-[350px] min-h-[200px] h-auto block mb-9 rounded-xl"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Spotify Mini Player
      </h1>
      <p className="text-base md:text-lg max-w-xl mb-8 text-gray-300">
        A minimal, always-on-top Spotify widget for your desktop. Lightweight,
        distraction-free, and made for focused listening.
        <br />
        <span className="block pt-4">
          <span className="text-yellow-400">!!!</span> Guide: to move app use
          Command + click to app
        </span>
      </p>
      <PlayerDownloadButton />
    </section>
  );
};
