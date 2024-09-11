import { Project } from "../types";

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch("http://192.168.1.103:8000/api/projects");
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data: Project[] = await response.json();
  return data;
};
