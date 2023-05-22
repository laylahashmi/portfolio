import Head from 'next/head'
import Header from '@/components/Header'
import Coder from '@/components/Coder'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="bg-[rgb(21,21,21)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#22a4ef]/80
    ">
      <Head>
        <title>Layla's Portfolio</title>
      </Head>

      <Header />

      <section id="coder" className="snap-start">
        <Coder />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
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
}
