import React from 'react';
import SectionLabel from '../components/SectionLabel';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onOpenDemo: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenDemo }) => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <SectionLabel
        number="04"
        title="THINGS I'VE BUILT"
        annotation="Editorial magazine spreads of featured engineering capstones"
      />

      {/* Projects Spreads Stack */}
      <div className="mt-8 space-y-12">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDemo={onOpenDemo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
