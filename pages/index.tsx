import Head from 'next/head'
import Header from '@/components/Header'
import Coder from '@/components/Coder'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

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

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
