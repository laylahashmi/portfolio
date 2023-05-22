import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Coder from '@/components/Coder'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'

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
      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
