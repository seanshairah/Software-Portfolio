import type { Project } from "./types";
import { frazierLogistics } from "./frazier-logistics";
import { studentHousing } from "./student-housing";
import { kinos } from "./kinos";
import { safeTransport } from "./safe-transport";
import { smartFarming } from "./smart-farming";
import { paymentArchitecture } from "./payment-architecture";
import { blessbri } from "./blessbri";

export const projects: Project[] = [
  frazierLogistics,
  studentHousing,
  kinos,
  safeTransport,
  smartFarming,
  paymentArchitecture,
  blessbri,
].sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}

export const projectSlugs = projects.map((p) => p.slug);

export type { Project } from "./types";
