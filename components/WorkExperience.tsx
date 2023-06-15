import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-lft overflow-hidden
    md:flex-row max-w-full px-10 justify-evenly mx-auto space-y-32 items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
            Experience
        </h3>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#22a4ef]/80">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience._id}
                experience={experience}
               />
            ))}
        </motion.div>
    </div>
  )
};

export default WorkExperience;
