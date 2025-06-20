"use client";

export default function DownloadButton() {
  const now = new Date();
  const gmtPlus5 = new Date(now.getTime() + 5 * 60 * 60 * 1000);
  const date = gmtPlus5.toISOString().split("T")[0];
  const time = gmtPlus5.toISOString().split("T")[1].replace("Z", "");
  
  const handleDownload = () => {
    fetch("https://71028e03e32bf6fc.mokky.dev/hashnote_count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: date, time: time }),
    });
    const fileName = "Hashnote.dmg";
    const link = document.createElement("a");
    link.href =
      "https://github.com/developerbola/hashnote/releases/download/hashnote/Hashnote_2.5.0.dmg";
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
