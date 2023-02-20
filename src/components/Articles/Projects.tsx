import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSProjects } from '../../cms-integration/markdown/projects';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import ProjectItem from './ProjectItem';

interface ProjectsProps {
  projects: CMSProjects[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <article className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faCodeMerge} level={2} text="Projects" />
        </div>

        {projects.map((project) => (
          <ProjectItem key={project.slug} {...project} />
        ))}
      </div>
    </article>
  );
};

export default Projects;
