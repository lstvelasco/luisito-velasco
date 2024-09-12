import { Project } from "../types";

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    "https://lv-portfoliomanager.infinityfreeapp.com/api/projects"
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data: Project[] = await response.json();
  return data;
};
