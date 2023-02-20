import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CMSPersonalInformation } from '../../cms-integration/markdown/personal';
import { CMSPrivateInformation } from '../../cms-integration/markdown/private';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  personalInformation,
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personalInformation.attributes.location}
        </li>
        <li>
          {/* @ts-ignore */}
          <strong>Email:</strong> {personalInformation.attributes.email}
        </li>


      </ul>
    </article>
  );
};
