export interface Role {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    project_id: number;
    project_role_id: number;
    created_at: string;
    updated_at: string;
  };
}

export interface Technology {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    project_id: number;
    project_technology_id: number;
    created_at: string;
    updated_at: string;
  };
}

export interface Image {
  id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  pivot: {
    project_id: number;
    image_id: number;
    created_at: string;
    updated_at: string;
  };
}

export interface Project {
  id: number;
  title: string;
  link: string;
  description: string;
  created_at: string;
  updated_at: string;
  roles: Role[];
  technologies: Technology[];
  images: Image[];
}
