// types/project.ts

export interface ProjectTechnology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: ProjectTechnology[];
  liveUrl: string;
  githubUrl: string;
  tags: string[];
}