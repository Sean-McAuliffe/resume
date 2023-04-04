import { CMSAchievement, getAchievements } from './markdown/achievements';
import { CMSAwards, getAwards } from './markdown/awards';
import { CMSHobbies, getHobbies } from './markdown/hobbies';
import { CMSLink, getLinks } from './markdown/links';
import {
  CMSPersonalInformation,
  getPersonalInformation,
} from './markdown/personal';
import { CMSPrivateInformation } from './markdown/private';
import {
  CMSProfessionalExperience,
  getProfessionalExperiences,
} from './markdown/professional';
import { CMSProjects, getProjects } from './markdown/projects';
import { CMSSkillCategory, getSkillCategories } from './markdown/skills';

type CMS = 'markdown';

export interface CMSData {
  achievements: CMSAchievement[];
  hobbies: CMSHobbies;
  links: CMSLink[];
  personalInformation: CMSPersonalInformation;
  privateInformation?: CMSPrivateInformation[];
  professional: CMSProfessionalExperience[];
  skills: CMSSkillCategory[];
  projects: CMSProjects[];
  awards:CMSAwards[];
}

export const getCMSIntegration = async (cms: CMS): Promise<CMSData> => {
  if (cms === 'markdown') {
    return {
      achievements: await getAchievements(),
      hobbies: await getHobbies(),
      links: await getLinks(),
      personalInformation: await getPersonalInformation(),
      professional: await getProfessionalExperiences(),
      skills: await getSkillCategories(),
      projects: await getProjects(),
      awards: await getAwards()
    };
  }
  return null;
};
