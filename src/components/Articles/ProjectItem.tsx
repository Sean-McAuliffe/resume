import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSProjects } from '../../cms-integration/markdown/projects';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';

const ProjectItem: React.FC<CMSProjects> = ({ attributes, html }) => {
  return (
    <article className="border-t-2 border-neutral-light-6 py-6 first-of-type:border-none last-of-type:pb-0 dark:border-neutral-dark-2">

      <Heading level={3}>{attributes.title}</Heading>

      <div className="mt-1 font-medium tracking-wide">
        <ul>
            <li>
            <strong>Language:</strong> { attributes.language}
            </li>
            <li>
                <strong>Category:</strong> {attributes.category}
            </li>
            <li>
                <strong>Status:</strong> {attributes.status}
            </li>
        </ul>
      </div>

      <Prose html={html} />
    </article>
  );
};

export default ProjectItem;
