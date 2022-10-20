import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../typings'
import BackgroundPyramid from './BackgroundPyramid'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name's ${pageInfo?.name}`,
            `Guy who loves strawberry with milk`,
            `<ButLovesToCodeMore />`
        ],
        loop: true,
        delaySpeed: 3000
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundPyramid />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQETy01shw2znA/profile-displayphoto-shrink_800_800/0/1573591790795?e=1670457600&v=beta&t=H7r_TRWhNFWFnggiJQozrZmspTILdQqm_JoGFYnPxCY" alt="" />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">{pageInfo.role}</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
                    <span>{text}</span>
                    <Cursor cursorColor="rgb(3, 255, 207)" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}