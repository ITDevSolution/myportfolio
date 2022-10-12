import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
           {/* projects */}
           {
            projects.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:pt-60 md:p-44 h-[95vh]'>
                    <motion.img 
                    initial={{opacity:0,y:-300}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}

                    src="https://res.cloudinary.com/joeloff-dev/image/upload/v1665495665/pecoandina_mleeow.png" alt="" 
                    className="xl:w-[800px] xl:h-[800px]"
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#03ffcf]">Case Study {i+1} of {projects.length}</span>:
                            UPS clone
                        </h4>

                        <p className='text-lg text-center md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias consequuntur quas ut totam at corrupti illo iure ea quos dolores quaerat rem, excepturi labore natus voluptates, assumenda consequatur! Temporibus, ratione.</p>
                    </div>
                </div>
               ))
           }
        </div>

        <div className='w-full absolute top-[30%] bg-[#03ffcf]/10 left-0 h-[500px] -skew-y-12' />

    </motion.div>
  )
}