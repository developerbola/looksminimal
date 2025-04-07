const About = () => {
  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[60%]">
        <div className="flex">
          <h1 className="text-[32px]">Hashnote</h1>
          <img src="/logo.svg" alt="hashnote logo" height={50} width={50} />
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <p>
            Hashnote - a minimal ElectronJS based powerful productivity app designed for
            developers. Also non developers can use {":)"}
          </p>
          <p>
            It visualizes your daily GitHub activity with an interactive heatmap
            while allowing you to take notes, build habits, and save code
            snippets with a powerful editor. Organized into Notes, Habits, and
            Codes sections.
          </p>
          <p>
            Hashnote helps you stay on top of your workflow with a sleek,
            developer-friendly interface. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
