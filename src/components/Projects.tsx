import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; // Assuming this component is properly defined
import { getProjects } from "../../actions/get-projects";
import { Project } from "../../types"; // Import Project type

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects(); // Fetch data from API
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="projects" className="hero bg-base-200 min-h-screen">
      <div className="hero-content min-w-12 flex-col gap-16">
        <h1 className="text-3xl lg:text-5xl font-bold font-sans">PROJECTS</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectName={project.title}
              description={project.description}
              imageUrl={`https://lv-portfoliomanager.infinityfreeapp.com/storage/${project.images[0]?.image_url}`} // Assuming the image comes from your API and is stored locally
              projectTechs={project.technologies.map((tech) => tech.name)} // Map over technologies to get their names
              role={project.roles.map((role) => role.name)} // Map over roles to get their names
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
