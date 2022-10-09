import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">About me</h3>


        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            x:0,
        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{once:true}}
        src="https://res.cloudinary.com/joeloff-dev/image/upload/v1665278214/myself_kxbhqy.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-10 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className='underline decoration-[#03ffcf]'>little</span> background</h4>
            <p className="text-base">
            I am an Selft-Taught and Enthusiastic turned developer. I have an extensive knowledge in Frontend: HTML, CSS, JavaScript, React, Next.JS, Angular & Backend: PHP, Laravel, Node.js, Express, .NET and the databases that I manage are: GraphSQL, FireBase, MongoDB, Mysql,PostgrestSql. My skills highly reflect across screens and teams I've worked with and am looking for my next endeavor in programming. Check out some projects I've worked on so far!
            </p>
        </div>

    </motion.div>
  )
}