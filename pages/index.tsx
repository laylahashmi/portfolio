import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Coder from '@/components/Coder'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Layla's Portfolio</title>
      </Head>

      <Header />
      {/* Coder */}
      <section id="coder" className="snap-center">
        <Coder />
      </section>
      {/* About */}

      {/* Experiences */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
