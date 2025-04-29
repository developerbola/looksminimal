import React from "react";

const Releases = () => {
  return (
    <div className="w-full flex justify-center pt-24">
      <div className="w-[60%]">
        <h1 className="text-[32px]">Release notes</h1>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-5 mt-4">
            <div className="space-y-6">
              {[
                {
                  date: "Apr 10, 2025",
                  version: "v1.0.0",
                  notes: "First release for Hashnote.",
                  link: "https://github.com/developerbola/hashnote-electron",
                },
                {
                  date: "Apr 29, 2025",
                  version: "v2.0.0",
                  notes:
                    "Made with Tauri v1 for reduce size. Removed Github activity & date. Fixed missing empty rows.",
                  link: "https://github.com/developerbola/hashnote/releases/download/hashnote/Hashnote.dmg",
                },
              ]
                .reverse()
                .map(({ date, version, notes, link }) => (
                  <div
                    key={version}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-3"
                  >
                    <span className="w-[120px] text-sm text-muted-foreground">
                      {date}
                    </span>
                    <a
                      href={link}
                      className="w-[70px] font-mono text-sm text-[#4da8ff] underline"
                    >
                      {version}
                    </a>
                    <p className="text-sm flex-1">{notes}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
