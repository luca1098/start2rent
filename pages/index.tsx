import type { NextPage } from 'next'
import Head from 'next/head'
import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'
import HowItWork from '../components/Home/HowItWork'
import Manifest from '../components/Home/Manifest'
import WhyUs from '../components/Home/WhyUs'
import Layout from '../Layout'

const Home: NextPage = () => {
  return (
    <>
    <Layout>
      <>
        <Hero />
        <Manifest />
        <WhyUs />
        <HowItWork />
        <Contact />
      </>
    </Layout>
    </>
  )
}

export default Home
