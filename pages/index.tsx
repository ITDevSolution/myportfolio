import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joel Porfolio</title>
      </Head>

      <h1 className='text-3xl font-bold text-red-400'>Lets build an AWESOME Porfolio</h1>

    </div>
  )
}

export default Home
