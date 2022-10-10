import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] mt-10 md:mt-10 xl:mt-24 snap-center bg-gray-800 p-10 hover:opacity-100 opacity-40 cursor-pointer transition:opacity duration-200 overflow-hidden ">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/joeloff-dev/image/upload/v1665361075/freelancer_otp2at.webp" alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Freelance Developer</h4>
            <p className="font-bold text-2xl mt-1">FREELANCE</p>
            <div className="flex space-x-2 my-2">
                {/* Tech used */}
                <img 
                
                src="https://skillicons.dev/icons?i=html,css,js,ts,react,redux,next,angular,php,laravel,nodejs,express,git,github,dotnet,cs,mysql,mongodb,postgres" />
                
            </div>
            <p className="uppercase py-5 text-gray-300">Starded work... - Ended...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>

        </div>

    </article>
  )
}