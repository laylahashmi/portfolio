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
    <div className="h-screen relative flex flex-col text-left max-w-full justify-evenly
        mx-auto items-center z-0 md:space-y-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl ">
            Projects
        </h3>

        <div className="relative w-full h-[62vh] md:h-[75vh] flex overflow-x-scroll overflow-y-auto snap-x snap-mandatory z-20
        scrollbar-thin">
            {projects.map((project, i) => (
                <div key="project" className="w-screen flex-shrink-0 snap-center flex flex-col
                 items-center overflow-y-auto space-y-24 px-10 md:space-y-10">
                    <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1}}
                    viewport={{once:true}}>
                    <Image
                        className="-mb-20 md:mb-0  w-80 h-64
                        object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[550px] xl:h-[300px] "
                        src={urlFor(project?.image).url()}
                        alt=""
                        height="100"
                        width="400"
                    />
                    </motion.div>

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-3xl text-semibold text-center ">
                            <span className="underline decoration-[#22a4ef]/50">
                                Project {i + 1} of {projects.length}:</span>{" "}
                                {project?.title}
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                        {project?.technologies.map((technology) => (
                            <Image
                            className="h-7 w-7 md:h-10 md:w-10"
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=""
                            height="100"
                            width="400"
                            />
                        ))}
                        </div>

                        <p className="lg:text-lg text-center md:text-left md:text-base ">{project.summary}</p>
                        {/* <a href={project.linkToBuild}>Check it out!</a> */}
                        <div className="flex flex-col md:flex-row items-center space-x-2
                        justify-center px-10 md:text-base lg:text-lg">
                            <span className="underline decoration-[#22a4ef]/50">
                                    Tools Used:</span>{" "}
                                {project?.technologies.map((technology) => (
                                <div key="technology">
                                    {technology.title}</div>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#22a4ef]/10 left-0 h-[400px] -skew-y-12"/>
    </div>
  )
}
