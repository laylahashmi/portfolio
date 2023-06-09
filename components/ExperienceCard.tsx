import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import robinhoodLogo from '/public/robinhoodLogo.png';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 h-[900px] md:w-[600px] md:h-[800px] xl:w-[900px] xl:h[1000px] snap-center p-10 bg-[#373434]
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 w-screen">
        <motion.div
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.2}}
        viewport={{once: true}}>
            <Image
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={urlFor(experience.companyImage).url()}
            alt=""
            width="400"
            height="100"
            />
        </motion.div>
        <div className="px-5 md:px-10">
            <h3 className="text-2xl md:text-4xl font-bold">{experience.jobTitle}</h3>
            <h4 className="text-xl md:text-3xl font-light">{experience.company}</h4>
            <div className="flex flex-wrap space-x-2 space-y-2 my-2">
                {experience.technologies.map((technology) => (
                    <Image
                    key={technology._id}
                    className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                    src={urlFor(technology?.image).url()}
                    height="100"
                    width="400"
                    alt=""/>
                ))}
            </div>
            <p className="text-sm md:text-lg uppercase py-5 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} -
                {experience.isCurrentlyWorkingHere? "Present"
                : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg h-96 overflow-x-scroll scrollbar-thin
             scrollbar-track-gray-400/20 scrollbar-thumb-[#22a4ef]/80 ">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
};

export default ExperienceCard;
