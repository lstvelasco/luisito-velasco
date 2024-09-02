const Skills = () => {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content min-w-12 flex-col gap-16">
        <h1 className="text-3xl lg:text-5xl font-bold font-sans">SKILLS</h1>
        <div
          id="skills"
          className="flex flex-wrap flex-col gap-5 justify-center max-w-prose"
        >
          <div className="flex flex-wrap flex-row gap-2 lg:gap-5 justify-center">
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              HTML
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              CSS
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              JavaScript
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              TypeScript
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              Node
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              PHP
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              C#
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              Python
            </div>
          </div>

          <div className="divider divider-secondary w-40 m-auto"></div>

          <div className="flex flex-wrap flex-row gap-2 lg:gap-5 justify-center">
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              React
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              TailwindCSS
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              Bootstrap
            </div>
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              Laravel
            </div>
          </div>

          <div className="divider divider-secondary w-40 m-auto"></div>

          <div className="flex flex-wrap flex-row gap-2 lg:gap-5 justify-center">
            <div className="badge badge-primary font-serif text-base lg:text-2xl w-auto h-auto">
              Git
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
