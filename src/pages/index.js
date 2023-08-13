import Head from 'next/head'
import Hero from 'components/Hero'
import { motion } from 'framer-motion'
import ProjectsOverview from 'components/ProjectsOverview'
import Archive from 'components/Archive'

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Riumaan - Front-end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ProjectsOverview />
      <Archive />
    </div>
  )
}
