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
    className="flex flex-col relative h-screen text-center md:text-lft xl:flex-row max-w-[2000px]
    justify-evenly mx-auto items-center space-y-10 px-10 overflow-hidden">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
            Skills
        </h3>

        <div className="grid grid-cols-5 md:grid-cols-7 gap-5">
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
