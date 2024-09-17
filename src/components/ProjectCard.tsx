interface Props {
  projectName: any;
  imageUrl: string;
  description: string;
  projectTechs: string[];
  role: string[];
  link: string;
}

const ProjectCard = ({
  projectName,
  description,
  imageUrl,
  projectTechs,
  role,
  link,
}: Props) => {
  return (
    <div
      id={projectName.replaceAll(" ", "")}
      className="card bg-base-100 max-w-96 shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <a href={link} target="_blank">
        <figure id="project-image">
          <img
            src={imageUrl}
            alt={`${projectName}-image`}
            className="max-h-56"
          />
        </figure>
      </a>
      <div className="card-body">
        <h2
          id="project-name"
          className="card-title text-xl lg:text-lg font-mono font-bold uppercase"
        >
          {projectName}
        </h2>
        <div
          id="project-role"
          className="text-xl lg:text-lg font-mono font-bold gap-1 flex flex-wrap"
        >
          {role.map((item, index) => {
            return (
              <div key={index} className="badge badge-accent">
                {item}
              </div>
            );
          })}
        </div>
        <p
          id="project-description"
          className="font-light text-sm lg:text-base font-mono text-justify"
        >
          {description}
        </p>
        <div id="project-techs" className="flex flex-wrap gap-1 justify-end">
          {projectTechs.map((item, index) => {
            return (
              <div key={index} className="badge badge-outline">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
