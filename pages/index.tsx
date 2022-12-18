import Head from 'next/head'
import Header from "../components/Header"
import Hero from "../components/Hero"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonny's Portfolio</title>
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* About */}
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact */}
      </Head>
    </> 
  )
}
