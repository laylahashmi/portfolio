import React from 'react'
import robinhoodLogo from '/public/robinhoodLogo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#22a4ef]/80">
            {projects.map((project, i) => (
                <div key="project" className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-evenly p-20 md:p-44 h-screen">
                    <Image
                        src={urlFor(project?.image).url()}
                        alt=""
                        height="100"
                        width="400"
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-3xl text-semibold text-center">
                            <span className="underline decoration-[#22a4ef]/50">
                                Case Study {i + 1} of {projects.length}:</span>{" "}
                                {project?.title}
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                        {project?.technologies.map((technology) => (
                            <Image
                            className="h-10 w-10"
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=""
                            height="100"
                            width="400"
                            />
                        ))}
                        </div>

                        <p className="text-lg text-center md:text-left">{project.summary}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#22a4ef]/10 left-0 h-[400px] -skew-y-12"/>
    </motion.div>
  )
}
