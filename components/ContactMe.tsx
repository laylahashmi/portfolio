import React from 'react'
import { useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form"


interface Props {
    name: string;
    email: string;
    message: string;
  };

export default function ContactMe() {
    const [isLoading, setisLoading] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: Props) => {
        console.log(data);
        try {
            setisLoading(true);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

        const body = await res.json();
        if (res.ok) {
            alert(`${body.message} 🚀`);
            setisLoading(false);
        }
        if (res.status === 400) {
            alert(`$body.message} 😢`);
            setisLoading(false);
        }
        } catch (err) {
        console.log('Something went wrong: ', err);
        setisLoading(false);
        }
    };

  return (
    <div className="h-screen relative text-center flex flex-col md:text-left md:flex-row px-10 max-w-7xl
    justify-evenly mx-auto items-center space-y-16">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col h-[65vh] space-y-10 overflow-y-scroll">
            <h4 className="text-xl md:text-4xl font-semibold text-center">
                Liking what you see so far?{" "}
                <span className="underline decoration-[#22a4ef]/60">{" "}Let{"'"}s talk.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className=" text:lg md:text-2xl">+1 (346)-831-9036</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className="text:lg md:text-2xl">laylawaseem@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#22a4ef] h-7 w-7 animate-pulse"/>
                    <p className="text:lg md:text-2xl">Dallas/Fort Worth, TX</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
                    <input required id="name" {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input required id="email" {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>

                <textarea required id="message" {...register('message')} placeholder="Message" className="contactInput" />

                <button type="submit"
                className="bg-[#22a4ef] py-5 px-10 rounded-md text-black font-bold text-lg">
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    </div>
  )
}
