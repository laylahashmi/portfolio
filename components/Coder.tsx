import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import me from '/public/me.jpeg';
import Link from 'next/link';
import { PageInfo } from '../typings'
import { urlFor } from '@/sanity';


type Props = {
    pageInfo: PageInfo;
};

export default function Coder({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hey I'm Layla :)`,
            "Coder 💻",
            "Artist 🎨",
            "Book Worm 📖",
            "Traveler 🧳"],
            loop: true,
            delaySpeed: 2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={urlFor(pageInfo?.coderImage).url()}
            alt="An awesome coder gal who everyone should hire"
            height="100"
            width="400"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[9px]">
                {pageInfo?.role}
            </h2>
            <h1 className="text-4xl lg:text-5xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#22a4ef"/>
            </h1>

            <div className="pt-5 ">
                <Link href="#about">
                    <button className="coderButton">About</button>
                </Link>
                <Link href="#projects">
                    <button className="coderButton">Projects</button>
                </Link>
                <Link href="#skills">
                    <button className="coderButton">Skills</button>
                </Link>
                <Link href="#experience">
                    <button className="coderButton">Experience</button>
                </Link>
                {/* <Link href="/public/Layla Hashmi Resume.pdf">
                    <button className="coderButton">Resume</button>
                </Link> */}
            </div>
        </div>
    </div>
  )
};
