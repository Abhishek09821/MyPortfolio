"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="ACTIVE MISSIONS"
        title="Projects"
        description="Shipped systems, not slideware. Each one is a complete, working product."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
