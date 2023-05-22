import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <div
    className="flex flex-col relative min-h-screen text-center md:text-lft xl:flex-row max-w-[2000px]
    justify-evenly mx-auto items-center xl-space-y xl:px-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over a skill for proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />

        </div>
    </div>
  )
}

export default Skills
