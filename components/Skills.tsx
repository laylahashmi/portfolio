import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="flex flex-col relative min-h-screen text-center md:text-lft xl:flex-row max-w-[2000px]
    justify-evenly mx-auto items-center xl-space-y-0 xl:px-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
            Skills
        </h3>

        <div className="grid grid-cols-6 gap-5">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
    </motion.div>
  )
}

export default Skills
