import Head from 'next/head'
import Header from '@/components/Header'
import Coder from '@/components/Coder'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="bg-[rgb(21,21,21)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
