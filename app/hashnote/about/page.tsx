import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex justify-center pt-24">
      <div className="w-[60%]">
        <div className="flex items-center gap-1">
          <h1 className="text-[32px]">Hashnote</h1>
          <Image
            src="/hashnote.svg"
            alt="hashnote logo"
            height={50}
            width={50}
          />
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <p>
            Hashnote - a minimal Tauri V1 based powerful productivity note
            taking app designed for minimalism. You can write realtime markdown
            supported notes and save them to your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
