"use client";

const PlayerDownloadButton = () => {
  const now = new Date();
  const isoString = now.toISOString();
  const [date, time] = isoString.split("T");

  // Remove the trailing "Z" from time
  const cleanTime = time.replace("Z", "");

  const handleDownload = () => {
    fetch("https://71028e03e32bf6fc.mokky.dev/player_count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: date, time: cleanTime }),
    });
    const fileName = "Player.dmg";
    const link = document.createElement("a");
    link.href =
      "https://github.com/developerbola/spotify-player/releases/download/miniplayer/Player.dmg";
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
    >
      Download Now
    </button>
  );
};

export default PlayerDownloadButton;
