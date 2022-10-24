import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'


type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">About me</h3>


            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}

                src="https://res.cloudinary.com/joeloff-dev/image/upload/v1665278214/myself_kxbhqy.png"
                className="mt-12 -mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-10 md:px-10">
                <h4 className="text-4xl font-semibold">Here is a <span className='underline decoration-[#03ffcf]'>little</span> background</h4>
                <p className="text-base">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>

        </motion.div>
    )
}

export default About