"use client";

export default function DownloadButton() {
  const handleDownload = () => {
    fetch("https://71028e03e32bf6fc.mokky.dev/hashnote_count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: new Date().toISOString() }),
    });
    // const fileName = "Hashnote.dmg";
    // const link = document.createElement("a");
    // link.href =
    //   "https://github.com/developerbola/hashnote/releases/download/hashnote/Hashnote.dmg";
    // link.download = fileName;
    // link.target = "_blank";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <button
      className="bg-white text-black px-5 sm:px-7 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium whitespace-nowrap hover:bg-gray-100 max-w-72"
      onClick={handleDownload}
    >
      Try now
    </button>
  );
}
