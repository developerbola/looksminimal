import Image from "next/image";

const Privacy = () => {
  return (
    <div className="w-full flex justify-center pt-24 pb-20">
      <div className="w-[60%] flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <h1 className="text-[32px]">Privacy</h1>
          <Image
            src="/icons/privacy.svg"
            alt="hashnote logo"
            height={35}
            width={35}
          />
        </div>

        {/* Guides Section */}
        <div className="flex flex-col gap-6">
          {/* Dynamic back */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Data Storage & Security</h3>
            <div className="space-y-2">
              <p>This app does not store any data on external servers.</p>
              <p>
                All user notes is stored locally on your device in{" "}
                <code className="ml-1">~/.hashnote/.</code>
              </p>
              <p>
                We do not collect, share, or transmit your data to any third
                party.
              </p>
            </div>
            <h3 className="text-2xl font-semibold">Access & Permissions</h3>
            <div className="space-y-2">
              <p>
                The app only accesses local files required for storing your
                settings and notes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
