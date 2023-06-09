import React from 'react';
import meAgain from '/public/meAgain.jpeg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
        </h3>
        <div className=" flex flex-col h-[60vh] md:flex-row max-w-7xl items-center overflow-y-auto space-y-24 md:px-10">
            <motion.div
                initial={{x: -200, opacity: 0}}
                transition={{duration: 1.2}}
                whileInView={{ opacity:1, x: 0 }}
                viewport={{ once: true }}>
                <Image
                    className="-mb-20 md:mb-0 w-48 h-48 rounded-full
                    object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[450px] xl:h-[550px]"
                    src={urlFor(pageInfo?.profilePic).url()}
                    height="200"
                    width="800"
                    alt="A pic of adventurous Layla sitting on her fav possession: a 2017 Jeep Wrangler."/>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="space-y-10 px-0 md:px-10 max-w-2xl">
                <h4 className="text-4xl">
                    Here is a{" "}
                    <span className="underline decoration-[#22a4ef]/50">little</span>{" "}
                    background:
                </h4>
                <p className="text-base">{pageInfo.backgroundInformation}</p>
            </motion.div>
        </div>
    </div>
  )
}
