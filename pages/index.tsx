import Head from 'next/head';
import Header from '@/components/Header';
import Coder from '@/components/Coder';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Skill, Project, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(37,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#22a4ef]/80
    ">
      <Head>
        <title>Layla's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="coder" className="snap-start">
        <Coder pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#coder">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="text-[#22a4ef] h-8 w-8 filter grayscale hover:grayscale-0" />
          </div>
        </footer>
      </Link>
    </div>

  )
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }
  }

  revalidate: 60;
};
