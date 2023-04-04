import { getCMSIntegration } from '../cms-integration/getCMSIntegration';
import AboutMe from '../components/Articles/AboutMe';
import Achievements from '../components/Articles/Achievements';
import { ContactInformation } from '../components/Articles/ContactInformation';
import { HobbiesAndInterests } from '../components/Articles/HobbiesAndInterests';
import Professional from '../components/Articles/Professional';
import Skills from '../components/Articles/Skills';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Projects from '../components/Articles/Projects';
import CodeSnippets from '../components/Articles/CodeSnippets';
import FAQS from '../components/Articles/FAQ';
import Awards from '../components/Articles/Awards';
// @ts-expect-error Server Component
const Page: React.FC<PageProps> = async () => {
  const data = await getCMSIntegration('markdown');

  return (
    <>
      <Header personalInformation={data.personalInformation} />

      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe personalInformation={data.personalInformation} />
          <ContactInformation personalInformation={data.personalInformation} />
        </div>

        <div className="mt-12">
          <Skills skills={data.skills} />
        </div>

        <div className="mt-12">
          <Professional professionalExperience={data.professional} />
        </div>

        <div className="mt-12">
          <Awards Awards={data.awards} />
        </div>
        <div className="mt-12">
          <Achievements achievements={data.achievements} />
        </div>

        <div className="mt-12">
          <Projects projects={data.projects}/>
        </div>

        <div className="mt-12">
          <CodeSnippets />
        </div>


        <div className="mt-12">
          <FAQS />
        </div>
      </div>

      <Footer
        personalInformation={data.personalInformation}
        links={data.links}
      />
    </>
  );
};

export default Page;
