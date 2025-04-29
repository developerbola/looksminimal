import PlayerDownloadButton from "@/components/PlayerDownloadButton";
import type { Metadata } from "next";
import Link from "next/link";

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
  const stars = getStars();
  return (
    <section className="w-full pt-14 px-6 flex flex-col items-center text-center">
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
        distraction-free, and made for vibe listening.
        <br />
        <span className="block pt-4">
          To move app use Command + click to app{" "}
          <Link href="https://github.com/developerbola/spotify-player">
            <button className="inline-flex items-center gap-1 rounded-lg border border-gray-800 bg-slate-950 px-2 py-1 text-sm font-medium text-gray-300 transition hover:bg-slate-800">
              ⭐ Give Star{" "}
              <span style={{ fontFamily: "var(--font-jetbrains)" }}>
                {stars}
              </span>
            </button>
          </Link>
        </span>
      </p>
      <PlayerDownloadButton />
      <p className="text-sm text-gray-500 max-w-sm mt-6 leading-relaxed">
        ⚠️ When you click a button and it doesn&apos;t respond the first time — this
        isn&apos;t a bug. The first click focuses the app window, and the second
        click will activate the button.
      </p>
    </section>
  );
};

async function getStars() {
  const res = await fetch(
    "https://api.github.com/repos/developerbola/spotify-player",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );

  if (!res.ok) return 0;
  const data = await res.json();
  return data.stargazers_count;
}
