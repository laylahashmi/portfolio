import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import me from '/public/me.jpeg'
import Link from 'next/link'

type Props = {}

export default function Coder({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi! Layla Hashmi here :)",
            "Girl-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"],
            loop: true,
            delaySpeed: 2000
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={me}
            alt="An awesome coder gal who everyone should hire"
            height="100"
            width="400"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[9px]">FullStack Software Engineer</h2>
            <h1 className="text-4xl lg:text-5xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#22a4ef"/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="coderButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="coderButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="coderButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="coderButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}