import { Project } from "./types";

export const getProjectImages = (project: Project | null) =>
  project?.images || (project?.image ? [project.image] : undefined);
