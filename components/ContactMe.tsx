import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen relative text-center flex flex-col md:text-left md:flex-row px-10 max-w-7xl
    justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I've got just what you need.{" "}
                <span className="underline decoration-[#22a4ef]/50">{" "}Let's talk.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+1 (346)-831-9036</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">laylawaseem@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Dallas/Fort Worth, TX</p>
                </div>
            </div>

            <form className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input placeholder="Name" className="contactInput" type="text" />
                    <input placeholder="Email" className="contactInput" type="email" />
                </div>

                <input placeholder="Subject" className="contactInput" type="text"/>

                <textarea placeholder="Message" className="contactInput" />

                <button type="submit" className="bg-[#22a4ef] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}