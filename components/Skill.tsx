import React from 'react'
import { motion } from 'framer-motion'
import robinhoodLogo from '/public/robinhoodLogo.png'
import Image from 'next/image'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}>
            <Image
            className="rounded-full border border-gray-500 object-cover w-15
            h-15 md:h-24 md:w-24 lg:h-32 lg:w-32 filter group-hover:grayscale transition duration-300
            ease-in-out"
            src={urlFor(skill?.image).url()}
            alt=""
            height="100"
            width="100"
            />
        </motion.div>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-15 w-15 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="md:text-lg text-sm font-bold text-black opacity-100">{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
