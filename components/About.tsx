import React from 'react'
import meAgain from '/public/meAgain.jpeg'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
        </h3>
        <motion.div
            initial={{x: -200, opacity: 0}}
            transition={{duration: 1.2}}
            whileInView={{ opacity:1, x: 0 }}>
            <Image
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
                object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[550px]"
                src={meAgain}
                alt="A pic of adventurous Layla sitting on her fav possession: a 2017 Jeep Wrangler."/>
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="space-y-10 px-0 md:px-10 max-w-2xl">
            <h4 className="text-4xl font-semibold">
                Here is a{" "}
                <span className="underline decoration-[#22a4ef]/50">little</span>{" "}
                background:
            </h4>
            <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus commodo a massa in luctus. Nam eget magna est.
                Aliquam non sapien sagittis mauris vestibulum tristique.
                Curabitur blandit ac diam vitae convallis. Proin et est
                enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus commodo a massa in luctus. Nam eget magna est.
                Aliquam non sapien sagittis mauris vestibulum tristique.
                Curabitur blandit ac diam vitae convallis. Proin et est
                enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus commodo a massa in luctus. Nam eget magna est.
                Aliquam non sapien sagittis mauris vestibulum tristique.
                Curabitur blandit ac diam vitae convallis. Proin et est enim.
            </p>
        </motion.div>
    </div>
  )
}
