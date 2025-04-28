import HashnoteDownloadButton from "@/components/HashnoteDownloadButton";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LooksMinimal | Hashnote",
  icons: "/hashnote.svg",
};

const Hashnote = async () => {
  const stars = await getStars();

  return (
    <section className="w-full max-w-6xl mx-auto flex items-center justify-between px-12 py-24 gap-10">
      {/* Content Side */}
      <div className="w-1/2 text-left flex flex-col items-start">
        <h1 className="text-4xl font-bold mb-6">
          Fast. Minimal. Markdown-friendly.
        </h1>

        <div className="text-2xl mb-4 flex flex-wrap items-center gap-2">
          <span>Free & Open source.</span>
          <Link href="https://github.com/developerbola/hashnote">
            <button className="inline-flex items-center gap-1 rounded-lg border border-gray-800 bg-slate-950 px-2 py-1 text-sm font-medium text-gray-300 transition hover:bg-slate-800">
              ⭐ Give Star{" "}
              <span style={{ fontFamily: "var(--font-jetbrains)" }}>
                {stars}
              </span>
            </button>
          </Link>
        </div>

        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          Hashnote helps you write, manage, and organize your notes effortlessly
          with markdown editor, and a minimal UI.{" "}
          <span className="whitespace-nowrap bg-green-600 text-white px-2 py-[2px] text-[16px] rounded-full">
            Size reduced from 263 mb to 7.5 mb
          </span>
        </p>

        <div className="flex gap-3 w-full items-center">
          <HashnoteDownloadButton />
          <a
            href="/hashnote/guides"
            className="px-6 py-3 font-medium text-gray-300 hover:underline text-center whitespace-nowrap"
          >
            See features
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-1/2 order-1">
        <Image
          src="/hashnote-preview.png"
          alt="Hashnote App Preview"
          width={600}
          height={600}
          priority
          unoptimized
          className="w-full max-w-[450px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hashnote;

async function getStars() {
  const res = await fetch(
    "https://api.github.com/repos/developerbola/hashnote",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );
  const res2 = await fetch(
    "https://api.github.com/repos/developerbola/hashnote-electron",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );

  if (!res.ok && !res2.ok) return 0;

  const data1 = await res.json();
  const data2 = await res2.json();
  return data1.stargazers_count + data2.stargazers_count;
}
