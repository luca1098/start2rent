import type { NextPage } from 'next'
import Head from 'next/head'
import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'
import HowItWork from '../components/Home/HowItWork'
import Manifest from '../components/Home/Manifest'
import ShortVsClassicRent from '../components/Home/ShortVsClassicRent'
import WhyUs from '../components/Home/WhyUs'
import Layout from '../Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <Manifest />
        <WhyUs />
        {/* <ShortVsClassicRent /> */}
        <HowItWork />
        <Contact />
      </>
    </Layout>
    
  )
}

export default Home
