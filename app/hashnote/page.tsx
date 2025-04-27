import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LooksMinimal | Hashnote",
  icons: "/hashnote.svg",
};

const Hashnote = async () => {
  const stars = await getStars();

  // const handleDownload = () => {
  //   const fileName = "Hashnote-1.0.0.dmg";
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://github.com/developerbola/hashnoteapp/releases/download/Hashnote/Hashnote-1.0.0.dmg";
  //   link.download = fileName;
  //   link.target = "_blank";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24 gap-6 md:gap-10 lg:gap-16">
      {/* Content Side */}
      <div className="w-full md:w-1/2 text-left flex flex-col items-center md:items-start">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Fast. Minimal. Markdown-friendly.
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl mb-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span>Free & Open source.</span>
          <Link href="https://github.com/developerbola/hashnote">
            <button className="inline-flex items-center gap-1 rounded-lg border border-gray-800 bg-slate-950 px-2 py-1 sm:px-3 sm:py-1.5 text-sm font-medium text-gray-300 transition hover:bg-slate-800">
              ⭐ Give Star{" "}
              <span style={{ fontFamily: "var(--font-jetbrains)" }}>
                {stars}
              </span>
            </button>
          </Link>
        </div>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl">
          Hashnote helps you write, manage, and organize your notes effortlessly
          with markdown editor, and a minimal UI.
        </p>

        <div className="flex gap-3 sm:gap-4 w-full xs:w-auto justify-center md:justify-start items-center">
          <button className="bg-white text-black px-5 sm:px-7 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium whitespace-nowrap hover:bg-gray-100 max-w-72">
            Try now
          </button>
          <a
            href="/hashnote/guides"
            className="px-4 sm:px-6 py-2 sm:py-3 font-medium text-gray-300 hover:underline text-center whitespace-nowrap"
          >
            See features
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 sm:flex hidden justify-center md:justify-start lg:justify-center order-2 md:order-1">
        <Image
          src="/preview.png"
          alt="Hashnote App Preview"
          width={600}
          height={600}
          priority
          unoptimized
          className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] h-auto rounded-xl shadow-lg"
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
      // Next.js App Router specific revalidation (optional)
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );

  if (!res.ok) return 0;

  const data = await res.json();
  return data.stargazers_count;
}
