import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSAwards } from '../../cms-integration/markdown/awards';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import AwardItem from './AwardItem';

interface AwardsProps {
  Awards: CMSAwards[];
}

const Awards: React.FC<AwardsProps> = ({ Awards }) => {
  return (
    <article className="rounded-xl bg-neutral-light-3 py-12 dark:bg-neutral-dark-3">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faCodeMerge} level={2} text="Awards" />
        </div>

        {Awards.map((project) => (
          <AwardItem key={project.slug} {...project} />
        ))}
      </div>
    </article>
  );
};

export default Awards;
